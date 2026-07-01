export const translations = {
  vi: {
    // Intro
    introSubtitle: "ĐANG KHỞI CHẠY TRẢI NGHIỆM",
    introRoleLabel: "Vai trò",
    introRoleValue: "Fullstack",
    introStackLabel: "Công nghệ",
    introStackValue: "Next / TS",
    introModeLabel: "Giao diện",
    introModeValue: "Mơ mộng",
    introFpsLabel: "Tốc độ",
    introFpsValue: "60 FPS",
    introRoleTitle: "Lập trình viên Sáng tạo",

    // About
    aboutTitle: "Xin chào, tôi là Harry",
    aboutDesc: "Tôi là một nhà phát triển phần mềm từ Việt Nam, yêu thích xây dựng những trải nghiệm web nhẹ nhàng, sạch sẽ và mộng mơ. Tôi đam mê làm việc với React, Next.js, TypeScript, NestJS, Spring Boot, MongoDB và PostgreSQL.",
    
    // Headers
    experience: "Kinh nghiệm",
    journey: "Hành trình",
    contact: "Liên hệ",
    softwares: "Công nghệ",
    consoleTitle: "Console",
    consoleSubtitle: "Môi trường tương tác hệ thống",
    projectsTitle: "Dự án",

    // Experience Items
    expFullstackTitle: "Dự án Fullstack",
    expFullstackDesc: "React, Next.js, NestJS, Spring Boot",
    expBackendTitle: "Phát triển Backend",
    expBackendDesc: "REST API, thiết kế database, luồng xác thực",
    expFrontendTitle: "Giao diện Frontend",
    expFrontendDesc: "Website một trang, dashboard, animation mượt mà",

    // Contact
    contactLocation: "Vị trí: Việt Nam",
    contactEmail: "Email: harrynguyen.dev@gmail.com", // placeholder, can be customized

    // Project Grid Card
    viewDetail: "Xem chi tiết →",

    // Project Modal
    projectNo: "Dự án số",
    technologies: "Công nghệ",
    keyFeatures: "Tính năng chính",
    viewCode: "Xem Code trên GitHub",
    tryDemo: "Chạy thử Demo",

    // Console History
    consoleInit: "Đang khởi chạy HarryOS v1.0.0...",
    consoleConnecting: "Đang kết nối tới GitHub API (api.github.com)...",
    consoleConnected: "Kết nối thành công. Đã tải thông tin lập trình viên.",
    consoleHelpTip: "Gõ 'help' để xem danh sách lệnh có sẵn.",
    consoleInputPlaceholder: "Gõ lệnh ở đây (vd: help, neofetch)...",
    consoleHeader: "BẢNG ĐIỀU KHIỂN HỆ THỐNG",

    // Console Command Outputs
    cmdHelpTitle: "Các lệnh khả dụng:",
    cmdHelpNeofetch: "neofetch  - Hiển thị thông tin hệ thống & GitHub stats",
    cmdHelpSkills: "skills    - Liệt kê kỹ năng lập trình với thanh tiến trình",
    cmdHelpPing: "ping      - Kiểm tra kết nối tới máy chủ",
    cmdHelpClear: "clear     - Xóa toàn bộ lịch sử console",
    cmdSkillsTitle: "KỸ NĂNG CHUYÊN MÔN / PROGRAMMING STACK:",
    cmdPingStart: "PING api.harrydev.vn (103.82.21.9): 56 data bytes",
    cmdPingLoss: "2 gói đã truyền, 2 gói đã nhận, 0.0% tỷ lệ mất gói",

    // Projects list
    projects: [
      {
        id: "1",
        title: "Learning Center",
        desc: "Hệ thống quản lý trung tâm giáo dục, học phí và lớp học.",
        longDesc: "Một hệ thống quản lý trung tâm giáo dục toàn diện tích hợp cả backend vững chắc bằng Spring Boot và frontend trực quan bằng React. Dự án giải quyết các nghiệp vụ phức tạp như tính toán học phí, xuất hóa đơn, quản lý điểm số và phân quyền chi tiết cho Admin, giáo viên, học sinh.",
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
        tech: ["Swift", "SwiftUI", "CoreData", "Combine"],
        features: [
          "Hiển thị tài liệu & lật trang mượt mà với hiệu suất cao",
          "Lưu trữ và phân loại sách offline bằng CoreData",
          "Ghi chú (Notes) và Đánh dấu trang (Bookmarks) tiện lợi",
          "Chế độ đọc ban đêm (Dark Mode) tối ưu bảo vệ mắt"
        ]
      }
    ]
  },
  en: {
    // Intro
    introSubtitle: "INITIALIZING EXPERIENCE",
    introRoleLabel: "Role",
    introRoleValue: "Fullstack",
    introStackLabel: "Stack",
    introStackValue: "Next / TS",
    introModeLabel: "Mode",
    introModeValue: "Dream UI",
    introFpsLabel: "Speed",
    introFpsValue: "60 FPS",
    introRoleTitle: "Creative Developer",

    // About
    aboutTitle: "Hi, I’m Harry",
    aboutDesc: "I am a software developer from Vietnam who loves building soft, clean, and dreamy web experiences. I enjoy working with React, Next.js, TypeScript, NestJS, Spring Boot, MongoDB, and PostgreSQL.",
    
    // Headers
    experience: "Experience",
    journey: "Journey",
    contact: "Contact",
    softwares: "Skills",
    consoleTitle: "Console",
    consoleSubtitle: "System interactive environment",
    projectsTitle: "Projects",

    // Experience Items
    expFullstackTitle: "Fullstack Projects",
    expFullstackDesc: "React, Next.js, NestJS, Spring Boot",
    expBackendTitle: "Backend Development",
    expBackendDesc: "REST APIs, database design, auth flow",
    expFrontendTitle: "Frontend UI",
    expFrontendDesc: "One-page websites, dashboards, smooth animation",

    // Contact
    contactLocation: "Location: Vietnam",
    contactEmail: "Email: harrynguyen.dev@gmail.com",

    // Project Grid Card
    viewDetail: "View Details →",

    // Project Modal
    projectNo: "Project No.",
    technologies: "Technologies",
    keyFeatures: "Key Features",
    viewCode: "View Code on GitHub",
    tryDemo: "Try Live Demo",

    // Console History
    consoleInit: "Initializing HarryOS v1.0.0...",
    consoleConnecting: "Connecting to GitHub API (api.github.com)...",
    consoleConnected: "Successfully loaded developer profile.",
    consoleHelpTip: "Type 'help' to see available commands.",
    consoleInputPlaceholder: "Type command here (e.g. help, neofetch)...",
    consoleHeader: "SYSTEM CONTROL CONSOLE",

    // Console Command Outputs
    cmdHelpTitle: "Available commands:",
    cmdHelpNeofetch: "neofetch  - Display system info & GitHub stats",
    cmdHelpSkills: "skills    - List programming stack with progress bar",
    cmdHelpPing: "ping      - Ping server latency",
    cmdHelpClear: "clear     - Wipe console history",
    cmdSkillsTitle: "PROGRAMMING STACK & SKILLS:",
    cmdPingStart: "PING api.harrydev.vn (103.82.21.9): 56 data bytes",
    cmdPingLoss: "2 packets transmitted, 2 packets received, 0.0% packet loss",

    // Projects list
    projects: [
      {
        id: "1",
        title: "Learning Center",
        desc: "Management system for education centers, fees, and classes.",
        longDesc: "A comprehensive education center management system integrating a solid Spring Boot backend and an intuitive React frontend. Resolves complex operations like tuition calculations, invoice generation, grade tracking, and detailed role authorizations for Admins, teachers, and students.",
        tech: ["Spring Boot", "PostgreSQL", "React", "REST API", "Docker"],
        features: [
          "Manage students, teachers & classrooms",
          "Automated billing & tuition reconciliation",
          "Visual grading sheets & student progress tracking",
          "Detailed user access levels secured with JWT"
        ]
      },
      {
        id: "2",
        title: "Memories Gallery",
        desc: "A mini social space to post and preserve beautiful life memories.",
        longDesc: "A social media feed application allowing users to upload images, category tags, and write personal stories onto a timeline. Integrates standard social features like comments and likes with fluid page transitions.",
        tech: ["React", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
        features: [
          "Create timeline posts with image attachments & tags",
          "Visual and smooth scrolling feed memory layout",
          "Likes and nested comments interactions",
          "Quick post searches and keyword filtering"
        ]
      },
      {
        id: "3",
        title: "Snake Game",
        desc: "Classic retro arcade snake game written in JavaScript & Canvas.",
        longDesc: "The traditional snake game recreated using HTML5 Canvas and raw Vanilla JavaScript. Built with high-performance drawing loops and precise keystroke listeners to offer a responsive, classic playing experience.",
        tech: ["HTML5 Canvas", "Vanilla JavaScript", "CSS3 Animations"],
        features: [
          "Classic lag-free drawing gameplay loop",
          "Local storage for highest score tracking",
          "Configurable board sizes and snake speeds",
          "Retro-inspired sound effects using Web Audio API"
        ]
      },
      {
        id: "4",
        title: "Invoice System",
        desc: "An automated invoice verification and accounting engine.",
        longDesc: "A backend service powered by NestJS to parse, validate, and store electronic XML/PDF invoices. Optimizes queries for large invoice lists and ensures strict data integrity for company audits.",
        tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "REST API"],
        features: [
          "Automatic XML/PDF parsing on document upload",
          "Transaction verification and synchronization log",
          "Detailed monthly/annual accounting reports",
          "Query logger to trace and optimize database performance"
        ]
      },
      {
        id: "5",
        title: "Reader App",
        desc: "Minimalist book and document reading application for iOS.",
        longDesc: "A personal document viewer app built natively for the iOS platform using Swift & SwiftUI. Highlights a distraction-free page viewer, offline book parsing with CoreData, and custom categories configuration. (Private codebase).",
        tech: ["Swift", "SwiftUI", "CoreData", "Combine"],
        features: [
          "Fluid document rendering with 3D page flip effect",
          "Offline book library storage using CoreData",
          "Quick bookmarks and notes writing overlay",
          "System-integrated auto dark mode eye protection"
        ]
      }
    ]
  }
};
