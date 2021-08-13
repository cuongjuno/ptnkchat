import { Router } from 'express';

import Admin from '../../services/admin';
import auth from '../middleware/auth';

import config from '../../config';

import { AdminReplyProps } from '../../interfaces/AdminReplyProps';
import gender from '../../db/models/gender';
import GenderEnum from '../../enums/GenderEnum';
import db from '../../db';
import lang from '../../lang';
import fb from '../../utils/facebook';
import { ChatRoomEntry, WaitRoomEntry } from '../../interfaces/DatabaseEntry';
const router = Router();

router.post('/connect', async (req, res) => {
  const { id1, id2 } = req.body;
  try {
    await db.removeFromChatRoom(id1);
    await db.removeFromWaitRoom(id1);
    await db.removeFromChatRoom(id2);
    await db.removeFromWaitRoom(id2);
    await Admin.forceMatch(id1, id2, GenderEnum.FEMALE, GenderEnum.MALE)
    res.send('done')
  } catch (error) {
    console.log(error)
    res.send('fail')
  }
})

router.get('/thongbao', async (req, res) => {
  const chatRoomList: ChatRoomEntry[] = await db.getListChatRoom();
  const waitRoomList: WaitRoomEntry[] = await db.getListWaitRoom();
  const waitRoomListId = waitRoomList.map(e => e.id);
  const chatRoomListId1 = chatRoomList.map(e => e.id1);
  const chatRoomListId2 = chatRoomList.map(e => e.id2);
  const allList = waitRoomListId.concat(chatRoomListId1).concat(chatRoomListId2)

  try {
    allList.forEach(async (e) => {
      const partner = await db.findPartnerChatRoom(e);
      if (partner) {
        await fb.sendTextButtons(e, "[BOT] Đã lâu rồi 2 người chưa nói chuyện với nhau, bạn có muốn tìm người khác nói chuyện không?", false, false, true, true, true, false);
      } else {
        await fb.sendTextButtons(e, "[BOT] Đã lâu rồi bạn chưa vào BOT :(( , bạn có muốn tìm người nói chuyện không?", true, false, false, true, true, false);
      }
    })
    res.send('done')
  } catch (error) {
    console.log(error)
    res.send('fail')
  }
})

router.post('/edit/chatroom', auth, async (req, res) => {
  const data = req.body;
  let ret: AdminReplyProps = { success: false, error: true };
  if (data.type === 'match') {
    ret = await Admin.forceMatch(data.id1, data.id2, data.gender1, data.gender2);
  } else if (data.type === 'remove') {
    ret = await Admin.forceRemove(data.id);
  }
  res.send(ret);
});

router.post('/db/reset', auth, async (req, res) => {
  res.send(await Admin.resetDatabase());
});

router.post('/userinfo', auth, async (req, res) => {
  console.log(req.body);

  res.send(await Admin.getUserData(req.body.id));
});

router.get('/auth', auth, (req, res) => {
  res.send({ success: true, version: config.VERSION });
});

router.get('/read/chatroom', auth, async (req, res) => {
  res.send(await Admin.readChatRoom());
});

router.get('/read/waitroom', auth, async (req, res) => {
  res.send(await Admin.readWaitRoom());
});

router.get('/read/stats', auth, async (req, res) => {
  res.send(await Admin.readStats());
});

router.get('/backup', auth, async (req, res) => {
  res.send(await Admin.createBackup());
});

router.post('/restore', auth, async (req, res) => {
  res.send(await Admin.restoreBackup(req.body));
});

router.get('/version', (req, res) => {
  res.send(config.VERSION);
});

export default router;
