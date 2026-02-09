# Logic Phát Hiện Ngôn Ngữ (Locale Detection)

## Tổng Quan

Hệ thống phát hiện ngôn ngữ hoạt động theo **thứ tự ưu tiên** với 3 phương pháp:

```
1. Cookie (Người dùng đã chọn) → ƯU TIÊN CAO NHẤT
2. IP Geolocation (Vị trí địa lý) → ƯU TIÊN TRUNG BÌNH  
3. Accept-Language (Ngôn ngữ trình duyệt) → FALLBACK
```

---

## Chi Tiết Từng Phương Pháp

### 1. Cookie (Ưu Tiên Cao Nhất) 🍪

**Logic:**
- Kiểm tra cookie `NEXT_LOCALE` trong request
- Nếu có cookie và giá trị hợp lệ (`vi` hoặc `en`) → **Dùng ngay, không cần kiểm tra tiếp**

**Khi nào có Cookie:**
- Người dùng đã click vào nút chuyển ngôn ngữ trước đó
- Cookie được lưu trong 1 năm

**Ví dụ:**
```
Request Headers:
  Cookie: NEXT_LOCALE=en

→ Kết quả: "en" (ngay lập tức, bỏ qua các bước sau)
```

**Ưu điểm:**
- ✅ Tôn trọng lựa chọn của người dùng
- ✅ Nhanh (không cần gọi API)
- ✅ Giải quyết vấn đề: Người Mỹ ở Việt Nam vẫn thấy tiếng Anh nếu đã chọn trước đó

---

### 2. IP Geolocation (Ưu Tiên Trung Bình) 🌍

**Logic:**
- Lấy IP address từ request headers
- Gọi API `ipapi.co` để biết quốc gia của IP
- Nếu IP từ Việt Nam (VN) → `vi`
- Nếu IP từ nước khác → `en`

**Các bước:**
```
1. Lấy IP từ headers (x-vercel-forwarded-for, cf-connecting-ip, x-forwarded-for)
2. Kiểm tra IP có phải localhost/private không?
   - Nếu có → Skip (fallback về Accept-Language)
3. Gọi API: https://ipapi.co/{IP}/country/
4. Nhận về country code (VD: "VN", "US", "GB")
5. Map country code → locale:
   - "VN" → "vi"
   - Khác → "en"
```

**Ví dụ:**
```
IP: 123.456.789.0 (IP Việt Nam)
→ API trả về: "VN"
→ Kết quả: "vi"
```

```
IP: 8.8.8.8 (IP Mỹ)
→ API trả về: "US"
→ Kết quả: "en"
```

**Ưu điểm:**
- ✅ Tự động phát hiện theo vị trí địa lý
- ✅ Phù hợp với đa số người dùng

**Nhược điểm:**
- ⚠️ Chậm hơn (cần gọi API bên ngoài)
- ⚠️ Có thể sai nếu dùng VPN/Proxy
- ⚠️ Người Mỹ ở Việt Nam sẽ thấy tiếng Việt (nhưng có Cookie sẽ override)

**Xử lý lỗi:**
- Nếu API timeout (>2s) → Fallback về Accept-Language
- Nếu API lỗi → Fallback về Accept-Language
- Nếu không lấy được IP → Fallback về Accept-Language

---

### 3. Accept-Language (Fallback) 🌐

**Logic:**
- Đọc header `Accept-Language` từ trình duyệt
- Kiểm tra xem có chứa "en" không
- Nếu có → `en`, không thì → `vi` (default)

**Ví dụ:**
```
Accept-Language: en-US,en;q=0.9,vi;q=0.8
→ Có "en" → Kết quả: "en"
```

```
Accept-Language: vi-VN,vi;q=0.9
→ Không có "en" → Kết quả: "vi"
```

**Ưu điểm:**
- ✅ Nhanh (không cần gọi API)
- ✅ Dựa trên cài đặt trình duyệt của người dùng
- ✅ Luôn có sẵn (mọi trình duyệt đều gửi header này)

**Nhược điểm:**
- ⚠️ Không chính xác bằng IP Geolocation
- ⚠️ Người dùng có thể cài đặt sai ngôn ngữ trình duyệt

---

## Flow Hoàn Chỉnh

```
┌─────────────────────────────────────┐
│  Request đến website                │
└──────────────┬──────────────────────┘
               │
               ▼
    ┌──────────────────────┐
    │ Có Cookie?          │
    │ NEXT_LOCALE=vi|en?  │
    └──┬───────────┬──────┘
       │           │
    YES│           │NO
       │           │
       ▼           ▼
   ┌──────┐  ┌──────────────────┐
   │ Dùng │  │ Gọi IP Geolocation│
   │ Cookie│  │ API               │
   └──────┘  └──┬───────────┬────┘
                │           │
            SUCCESS│       │FAIL/TIMEOUT
                │           │
                ▼           ▼
         ┌──────────┐  ┌──────────────────┐
         │ IP = VN? │  │ Dùng Accept-     │
         └──┬───┬───┘  │ Language          │
            │   │       └──────────────────┘
         YES│   │NO
            │   │
            ▼   ▼
        ┌────┐ ┌────┐
        │ vi │ │ en │
        └────┘ └────┘
```

---

## Các Trường Hợp Cụ Thể

### Trường Hợp 1: Người Việt Nam ở Việt Nam
```
1. Cookie: Không có
2. IP Geolocation: VN → "vi"
3. Accept-Language: vi-VN

→ Kết quả: "vi" ✅
```

### Trường Hợp 2: Người Mỹ ở Mỹ
```
1. Cookie: Không có
2. IP Geolocation: US → "en"
3. Accept-Language: en-US

→ Kết quả: "en" ✅
```

### Trường Hợp 3: Người Mỹ ở Việt Nam (Du lịch)
```
1. Cookie: Không có
2. IP Geolocation: VN → "vi" ❌ (Sai - người Mỹ muốn tiếng Anh)
3. Accept-Language: en-US → "en"

→ Kết quả: "vi" (theo IP) ❌

GIẢI PHÁP: Người dùng click nút chuyển ngôn ngữ → Set Cookie
→ Lần sau: Cookie = "en" → Kết quả: "en" ✅
```

### Trường Hợp 4: Người Mỹ ở Việt Nam (Đã chọn ngôn ngữ trước)
```
1. Cookie: NEXT_LOCALE=en ✅
2. IP Geolocation: (Bỏ qua, không cần kiểm tra)
3. Accept-Language: (Bỏ qua, không cần kiểm tra)

→ Kết quả: "en" ✅ (Tôn trọng lựa chọn của người dùng)
```

### Trường Hợp 5: IP Geolocation API lỗi
```
1. Cookie: Không có
2. IP Geolocation: API timeout/lỗi → Fallback
3. Accept-Language: en-US → "en"

→ Kết quả: "en" ✅ (Vẫn hoạt động nhờ fallback)
```

### Trường Hợp 6: Localhost/Development
```
1. Cookie: Không có
2. IP Geolocation: 127.0.0.1 → Skip (private IP)
3. Accept-Language: en-US → "en"

→ Kết quả: "en" ✅
```

---

## Tại Sao Thứ Tự Ưu Tiên Như Vậy?

### 1. Cookie (Ưu Tiên Cao Nhất)
- **Lý do:** Tôn trọng lựa chọn của người dùng
- **Ví dụ:** Người dùng đã chọn tiếng Anh → Luôn hiển thị tiếng Anh, dù ở đâu

### 2. IP Geolocation (Ưu Tiên Trung Bình)
- **Lý do:** Phù hợp với đa số người dùng (90%+)
- **Ví dụ:** Người Việt ở Việt Nam → Tự động hiện tiếng Việt

### 3. Accept-Language (Fallback)
- **Lý do:** Luôn có sẵn, không cần gọi API
- **Ví dụ:** Khi IP Geolocation lỗi → Vẫn hoạt động

---

## Nút Chuyển Ngôn Ngữ

**Chức năng:**
- Cho phép người dùng tự chọn ngôn ngữ
- Lưu vào Cookie `NEXT_LOCALE`
- Redirect về trang tương ứng với ngôn ngữ mới

**Flow:**
```
1. Người dùng click "English" / "Tiếng Việt"
2. Gọi API: POST /api/set-locale?locale=en
3. Set Cookie: NEXT_LOCALE=en (hết hạn 1 năm)
4. Redirect: /vi/gioi-thieu → /en/about-us
5. Lần sau vào website → Tự động dùng Cookie (ưu tiên cao nhất)
```

---

## Tóm Tắt

| Phương Pháp | Ưu Tiên | Tốc Độ | Độ Chính Xác | Use Case |
|------------|---------|--------|--------------|----------|
| Cookie | ⭐⭐⭐ | ⚡⚡⚡ | 100% | Người dùng đã chọn |
| IP Geolocation | ⭐⭐ | ⚡⚡ | 90% | Tự động phát hiện |
| Accept-Language | ⭐ | ⚡⚡⚡ | 70% | Fallback |

**Kết luận:** Hệ thống này đảm bảo:
- ✅ Tôn trọng lựa chọn người dùng (Cookie)
- ✅ Tự động phát hiện đúng cho đa số (IP Geolocation)
- ✅ Luôn hoạt động dù có lỗi (Accept-Language fallback)
