export default {
  MAINTENANCE: '[BOT] Server hiện đang bảo trì...',

  FIRST_COME: '[BOT] Chào mừng bạn đến với HNUE-Chatbot. Trước khi bắt đầu, hãy chắc chắn rằng bạn đã chọn đúng giới tính người muốn chat cùng.\n\nẤn trợ giúp (hoặc gửi trogiup) để xem thêm.',

  INSTRUCTION: '[BOT] Gửi batdau hoặc bấm vào nút để thả thính.',

  HELP_TXT: '[BOT] Danh sách các lệnh:\n' +
            '- batdau: Bắt đầu câu cá nào ^^\n' +
            '- ketthuc: Thu cần\n' +
            '- trogiup: Xem trợ giúp\n' +
            '- meow: Xem ảnh mèo\n' +
            '- gauw: Xem ảnh cún\n\n' +
            'Các lệnh có thể dùng khi đang không chat:\n' +
            '- timnu: Câu cá nữ <3\n' +
            '- timnam: Câu cá nam <3',

  START_OKAY: '[BOT] OK! Chúng mình sẽ thông báo khi cá cắn câu ^^.',
  START_WARN_GENDER: '[BOT] Lưu ý: Bạn không chọn giới tính. Có thể bạn sẽ phải đợi lâu hơn.',
  START_ERR_ALREADY: '[BOT] Bạn không thể thả câu tiếp khi chưa thu cần...',

  WAITING: '[BOT] Đang tìm cá... Nếu bạn muốn đổi giới tính, gửi ketthuc sau đó chọn giới tính mới.',
  CONNECTED: '[BOT] Cá đã cắn câu!',

  END_CHAT: '[BOT] Đã thu cần!\nGửi batdau hoặc bấm vào nút để câu cá mới!',
  END_CHAT_PARTNER: '[BOT] Oop!!! Cá đã bơi đi :(\nGửi batdau hoặc bấm vào nút để câu cá mới!!',
  END_CHAT_FORCE: '[BOT] Hiện tại không có cá nào online :( Bạn hãy thử lại sau nhé :(',

  ERR_ATTACHMENT: '[BOT] Lỗi: Chatbot chưa hỗ trợ gửi dạng dữ liệu này',
  ATTACHMENT_LINK: '[BOT] Bạn ý đã gửi 1 đường link: ',

  GENDER_ERR: '[BOT] Lỗi: Giới tính nhập vào không hợp lệ!\n\nẤn trợ giúp (hoặc gửi trogiup) để xem thêm.',
  GENDER_WRITE_OK: '[BOT] Bạn đã chọn giới tính mong muốn tìm được là: ',
  GENDER_WRITE_WARN: '\n\nLưu ý: Tùy chọn này chỉ có tác dụng với PHẦN LỚN các cuộc nói chuyện.',
  GENDER_ARR_UNKNOWN: 'cả hai',
  GENDER_ARR_MALE: 'nam',
  GENDER_ARR_FEMALE: 'nữ',

  KEYWORD_START: 'batdau',
  KEYWORD_END: 'ketthuc',
  KEYWORD_GENDER: 'tim',
  KEYWORD_GENDER_MALE: 'nam',
  KEYWORD_GENDER_FEMALE: 'nu',
  KEYWORD_GENDER_BOTH: 'namnu',
  KEYWORD_HELP: 'trogiup',
  KEYWORD_CAT: 'meow',
  KEYWORD_DOG: 'gauw',

  ERR_FAKE_MSG: '[BOT] Lỗi: Bạn không được giả mạo tin nhắn của bot!',
  ERR_DATABASE: '[BOT] Lỗi: Không thể kết nối với database. Hãy báo cho admin!',
  ERR_TOO_LONG: '[BOT] Lỗi: Tin nhắn quá dài (nhiều hơn 2000 ký tự). Hãy chia nhỏ tin nhắn và gửi dần.',
  ERR_200: '[BOT] Bạn chat không thể nhận tin nhắn do đã xóa inbox hoặc block page.',
  ERR_10: '[BOT] Bạn chat không thể nhận tin nhắn do 2 bạn không nói chuyện trong 24h. Gửi ketthuc để kết thúc chat.',
  ERR_SERVER: '[BOT] Có lỗi xảy ra với chatbot. Tin nhắn của bạn chưa được xử lý. Bạn hãy thử lại sau 1 phút nữa nhé.',
  ERR_UNKNOWN: '[BOT] Server xảy ra lỗi nhưng không nghiêm trọng lắm\nHãy gửi ketthuc để thoát ra và thử lại',
};
