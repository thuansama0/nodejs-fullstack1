# Học NodeJS Cơ Bản

Dự án này là một ứng dụng web đơn giản được xây dựng bằng NodeJS, Express và MySQL, phục vụ cho việc học tập các kiến thức cơ bản về Fullstack Web Development.

## Các thư viện và công nghệ sử dụng

Dưới đây là danh sách các thư viện chính được sử dụng trong dự án:

### Dependencies (Thư viện chính)

- **[express](https://www.npmjs.com/package/express)** (`^4.18.2`): Framework web phổ biến nhất cho Node.js, giúp xây dựng ứng dụng web và API nhanh chóng.
- **[mysql2](https://www.npmjs.com/package/mysql2)** (`^2.3.3`): Driver kết nối và làm việc với cơ sở dữ liệu MySQL, hỗ trợ Promise và hiệu suất cao.
- **[ejs](https://www.npmjs.com/package/ejs)** (`^3.1.8`): Template engine giúp tạo ra các trang HTML động từ dữ liệu phía server.
- **[dotenv](https://www.npmjs.com/package/dotenv)** (`^16.0.3`): Giúp tải các biến môi trường từ file `.env` vào `process.env`, giúp quản lý cấu hình bảo mật và linh hoạt hơn.

### DevDependencies (Thư viện hỗ trợ phát triển)

- **[nodemon](https://www.npmjs.com/package/nodemon)** (`^2.0.20`): Công cụ tự động khởi động lại server khi có thay đổi trong code, giúp quá trình phát triển nhanh hơn.

## Cấu trúc dự án

```
src/
├── config/         # Cấu hình (Database, View Engine...)
├── controllers/    # Xử lý logic nghiệp vụ
├── models/         # Mô hình dữ liệu (nếu có)
├── routes/         # Định nghĩa các tuyến đường (URL)
├── views/          # Giao diện (EJS files)
├── public/         # File tĩnh (CSS, JS, Images)
└── server.js       # File khởi chạy ứng dụng
```

## Hướng dẫn cài đặt và chạy

1.  **Clone dự án:**

    ```bash
    git clone https://github.com/thuansama0/nodejs-fullstack1.git
    cd hoc-nodejs
    ```

2.  **Cài đặt các thư viện:**

    ```bash
    npm install
    ```

3.  **Cấu hình môi trường:**

    - Tạo file `.env` tại thư mục gốc (ngang hàng với `package.json`).
    - Copy nội dung từ file `.env.example` (nếu có) hoặc cấu hình như sau:
      ```env
      PORT=3000
      HOST_NAME=localhost
      DB_HOST=localhost
      DB_PORT=3307
      DB_USER=root
      DB_PASSWORD=your_password
      DB_NAME=hoidanit
      ```

4.  **Chạy dự án:**
    - Chạy môi trường development (với nodemon):
      ```bash
      npm run dev
      ```
    - Truy cập: `http://localhost:3000`

## Ghi chú

- Dự án này đang trong quá trình phát triển và học tập.
- Đảm bảo MySQL server đã được khởi chạy trước khi start ứng dụng.
