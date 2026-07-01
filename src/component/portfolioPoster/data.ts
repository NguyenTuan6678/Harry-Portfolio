export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "NestJS",
  "Spring Boot",
  "MongoDB",
  "PostgreSQL",
];

export const projects = [
  {
    id: "1",
    title: "Learning Center",
    desc: "Hệ thống quản lý trung tâm giáo dục, học phí và lớp học.",
    longDesc: "Một hệ thống quản lý trung tâm giáo dục toàn diện tích hợp cả backend vững chắc bằng Spring Boot và frontend trực quan bằng React. Dự án giải quyết các nghiệp vụ phức tạp như tính toán học phí, xuất hóa đơn, quản lý điểm số và phân quyền chi tiết cho Admin, giáo viên, học sinh.",
    image: "/projects/project-1.png",
    bg: "bg-[#5f7fd6]",
    github: "https://github.com/NguyenTuan6678/Learning-Center-Management-Backend",
    tech: ["Spring Boot", "PostgreSQL", "React", "REST API", "Docker"],
    features: [
      "Quản lý học sinh, giáo viên & lớp học",
      "Hệ thống hóa đơn & đối soát học phí tự động",
      "Theo dõi bảng điểm & kết quả học tập trực quan",
      "Phân quyền người dùng chi tiết và bảo mật JWT"
    ]
  },
  {
    id: "2",
    title: "Memories Gallery",
    desc: "Mạng xã hội thu nhỏ lưu giữ những khoảnh khắc và kỷ niệm đẹp.",
    longDesc: "Ứng dụng web cho phép người dùng đăng tải, lưu trữ hình ảnh và chia sẻ những câu chuyện cá nhân theo dòng thời gian. Tích hợp các tính năng tương tác xã hội cơ bản mang lại trải nghiệm mượt mà, ấm cúng.",
    image: "/projects/project-2.png",
    bg: "bg-[#d8d0b7]",
    github: "https://github.com/NguyenTuan6678/Memories-Gallery",
    demo: "https://hanoimemorygallery.canhdongtuyet39.workers.dev/",
    tech: ["React", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
    features: [
      "Đăng tải bài viết kèm hình ảnh và thẻ phân loại",
      "Lưu giữ kỷ niệm theo dòng thời gian sinh động",
      "Tương tác thích (Like) và bình luận (Comment)",
      "Tìm kiếm và lọc bài viết theo từ khóa nhanh chóng"
    ]
  },
  {
    id: "3",
    title: "Snake Game",
    desc: "Trò chơi rắn săn mồi cổ điển viết bằng Vanilla JS & Canvas.",
    longDesc: "Trò chơi rắn săn mồi truyền thống được tái hiện bằng HTML5 Canvas và Vanilla JavaScript thuần. Tập trung vào việc tối ưu hóa hiệu suất vẽ và phản hồi phím điều hướng cực nhạy để tạo cảm giác chơi mượt mà nhất.",
    image: "/projects/project-3.png",
    bg: "bg-[#a9bd78]",
    github: "https://github.com/NguyenTuan6678/Snake-Game",
    tech: ["HTML5 Canvas", "Vanilla JavaScript", "CSS3 Animations"],
    features: [
      "Lối chơi cổ điển mượt mà không giật lag",
      "Hệ thống lưu giữ điểm số cao nhất (Highscore)",
      "Tùy biến tốc độ di chuyển và kích thước lưới",
      "Hiệu ứng âm thanh retro sống động bằng Web Audio API"
    ]
  },
  {
    id: "4",
    title: "Invoice System",
    desc: "Hệ thống quản lý và đối soát hóa đơn điện tử tự động.",
    longDesc: "Một giải pháp backend mạnh mẽ bằng NestJS giúp doanh nghiệp xử lý, lưu trữ và đối soát hóa đơn XML/PDF. Dự án tối ưu hóa quy trình truy xuất dữ liệu lớn và đảm bảo tính nhất quán của các giao dịch kế toán.",
    image: "/projects/project-4.png",
    bg: "bg-[#ef5555]",
    github: "https://github.com/NguyenTuan6678/M-Backend",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "REST API"],
    features: [
      "Tải lên và phân tích cú pháp hóa đơn XML/PDF tự động",
      "Xử lý giao dịch và đồng bộ dữ liệu kế toán",
      "Báo cáo thống kê hóa đơn chi tiết theo tháng/năm",
      "Hệ thống log giám sát hiệu năng truy vấn database"
    ]
  },
  {
    id: "5",
    title: "Reader App",
    desc: "Ứng dụng đọc sách/tài liệu tối giản trên hệ điều hành iOS.",
    longDesc: "Ứng dụng đọc sách và quản lý tài liệu cá nhân viết riêng cho nền tảng iOS sử dụng Swift & SwiftUI. Tập trung tối ưu trải nghiệm đọc mượt mà, lưu trữ ngoại tuyến tài liệu lớn bằng CoreData và hỗ trợ quản lý danh mục thông minh. (Dự án mã nguồn riêng tư).",
    image: "/projects/project-5.png",
    bg: "bg-[#7c9be6]",
    github: "https://github.com/NguyenTuan6678",
    tech: ["Swift", "SwiftUI", "CoreData", "Combine"],
    features: [
      "Hiển thị tài liệu & lật trang mượt mà với hiệu suất cao",
      "Lưu trữ và phân loại sách offline bằng CoreData",
      "Ghi chú (Notes) và Đánh dấu trang (Bookmarks) tiện lợi",
      "Chế độ đọc ban đêm (Dark Mode) tối ưu bảo vệ mắt"
    ]
  },
];

