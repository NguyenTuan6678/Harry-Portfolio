# 🎮 Harry Portfolio - Retro Game Style Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Motion](https://img.shields.io/badge/Motion-Framer_Motion-FF69B4?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)

Một trang web portfolio cá nhân độc đáo được thiết kế theo phong cách **Retro Game (8-bit/Pixel Art)** với các tương tác mô phỏng máy chơi game cổ điển và console lập trình viên.

---

## 📺 Video Demo & Screenshots

> [!TIP]
> Bạn có thể quay màn hình (sử dụng OBS, Loom, hoặc tính năng ghi màn hình mặc định của macOS) rồi lưu file video vào thư mục `public/demo.mp4` hoặc chuyển thành file `.gif` và đặt vào đây để hiển thị trực tiếp trên GitHub README.

### 🎥 Demo Video
https://github.com/NguyenTuan6678/Harry-Portfolio/assets/demo.mp4

*(Nếu video không tự động chạy, bạn có thể xem trực tiếp video tại: `public/demo.mp4` hoặc tải file về máy)*

### 📸 Giao diện chính (Desktop & Mobile)
| Màn hình Khởi động (Cinematic Intro) | Bảng điều khiển chính (Portfolio Poster) |
|:---:|:---:|
| <img src="public/animeavatar.png" width="300" alt="Intro Mockup"/> | <img src="public/animeavatar.png" width="300" alt="Poster Mockup"/> |

---

## ✨ Tính năng nổi bật

- 🎬 **Cinematic Intro (Màn hình khởi động)**: Tái hiện lại trải nghiệm khởi động của các hệ máy chơi game cổ điển (console boot screen) với thanh tải dữ liệu và dòng mã giả lập terminal kết nối.
- 📟 **Interactive Developer Console**: Một Terminal ảo đầy đủ chức năng giúp người dùng tương tác bằng dòng lệnh (CLI). Hỗ trợ các câu lệnh:
  - `help` - Hiển thị danh sách câu lệnh.
  - `about` - Giới thiệu bản thân.
  - `projects` - Xem danh sách dự án.
  - `skills` - Hiển thị kỹ năng lập trình.
  - `clear` - Xóa màn hình console.
  - `neofetch` - Hiển thị thông số hệ thống phong cách Linux retro.
- 🪪 **Lanyard Card (Thẻ Nhân Viên)**: Thẻ thông tin cá nhân bo viền sắc nét mô phỏng thẻ ID Card trong game.
- 📂 **Project Showcase & Detail Modal**: Danh sách dự án hiển thị dưới dạng retro poster độc đáo. Khi click vào dự án, một cửa sổ chi tiết (Modal) sẽ hiện lên với các hiệu ứng động mượt mà qua thư viện Framer Motion (`motion`).
- 🌐 **Đa ngôn ngữ (English / Tiếng Việt)**: Hệ thống dịch chuyển ngữ chuẩn hóa tích hợp sẵn cho toàn bộ nội dung portfolio.
- 🎨 **Theme Switcher**: Cho phép thay đổi giữa nhiều bảng màu retro (Retro Sand, Charcoal, Terracotta, Deep Wine, Gold, v.v.).
- 📱 **Responsive Design**: Tương thích hoàn hảo trên các thiết bị di động, tablet và desktop.

---

## 🛠️ Công nghệ sử dụng

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Thư viện UI**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Hiệu ứng chuyển động**: [Motion (Framer Motion 12)](https://motion.dev/)
- **Ngôn ngữ**: [TypeScript](https://www.typescriptlang.org/)
- **Font chữ**: Google Fonts (`Pixelify Sans`, `VT323`) & JetBrains Mono Nerd Font để hiển thị icon/chữ lập trình viên chuẩn xác.

---

## 📂 Cấu trúc thư mục chính

```text
harryportfolio/
├── .vscode/               # Cấu hình IDE (Bỏ qua cảnh báo CSS của Tailwind v4)
├── public/                # Tài nguyên tĩnh (Hình ảnh, Avatar, Icons, Demo Video)
├── src/
│   ├── app/               # Next.js App Router (Layout, Page, Global CSS)
│   │   ├── globals.css    # Cấu hình Tailwind v4 theme, fonts, custom utility classes
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── component/         # Các components giao diện
│       ├── cinematic-intro/
│       │   └── CinematicIntro.tsx    # Giao diện hoạt cảnh mở đầu
│       └── portfolioPoster/
│           ├── CurvedLogo.tsx        # Logo dạng cong kiểu game cổ điển
│           ├── DeveloperConsole.tsx  # Terminal tương tác CLI
│           ├── PortfolioPoster.tsx   # Trang dashboard tổng hợp
│           ├── ProjectGraphic.tsx    # Minh họa đồ họa dự án
│           ├── ProjectModal.tsx      # Modal chi tiết dự án
│           ├── LanyardCard.tsx       # Thẻ nhân viên 8-bit
│           ├── data.ts               # Dữ liệu dự án và thông tin cá nhân
│           └── translations.ts       # File chứa các bản dịch song ngữ
```

---

## 🚀 Hướng dẫn cài đặt và chạy thử

### Yêu cầu hệ thống
- **Node.js**: Phiên bản 18.x trở lên
- **npm** hoặc **yarn** / **pnpm**

### Các bước thực hiện

1. **Clone repository về máy**:
   ```bash
   git clone https://github.com/NguyenTuan6678/Harry-Portfolio.git
   cd Harry-Portfolio/harryportfolio
   ```

2. **Cài đặt các gói thư viện**:
   ```bash
   npm install
   ```

3. **Chạy dự án ở chế độ phát triển (Development)**:
   ```bash
   npm run dev
   ```
   *Mở trình duyệt truy cập địa chỉ [http://localhost:3000](http://localhost:3000) để trải nghiệm ứng dụng.*

4. **Build dự án cho sản phẩm (Production)**:
   ```bash
   npm run build
   # Chạy server production sau khi build thành công
   npm start
   ```

---

## 📝 Quy trình Commit dự án

Dự án tuân thủ cách viết commit rõ ràng theo chuẩn **Conventional Commits**:
- `feat`: Tính năng mới (ví dụ: tạo component mới).
- `fix`: Sửa lỗi.
- `style`: Định dạng mã nguồn, CSS, theme.
- `refactor`: Tái cấu trúc mã nguồn (ví dụ: xóa file thừa).
- `chore`: Thay đổi cấu hình dự án, cấu hình IDE, dependencies.

---

## 📄 Bản quyền

Dự án được phát triển bởi **Harry Nguyen**.
Vui lòng không sao chép lại mã nguồn mà không có sự đồng ý.
