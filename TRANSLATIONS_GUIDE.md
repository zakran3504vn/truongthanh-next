# Hướng Dẫn Sử Dụng Translations

## Cấu Trúc

Tất cả translations được tập trung trong file:
```
src/lib/translations/index.ts
```

## Cách Sử Dụng

### 1. Import translations

```typescript
import { getTranslations, type Locale } from "@/lib/translations";

const safeLocale: Locale = locale === "en" ? "en" : "vi";
const t = getTranslations(safeLocale);
```

### 2. Sử dụng trong component

```typescript
// Lấy translations
const t = getTranslations(safeLocale);

// Sử dụng
<h1>{t.home.banner.heading}</h1>
<button>{t.home.banner.exploreButton}</button>
```

### 3. Thêm translations mới

Mở file `src/lib/translations/index.ts` và thêm vào:

```typescript
export interface Translations {
  home: {
    banner: { ... },
    // Thêm section mới
    newSection: {
      title: string;
      description: string;
    };
  };
  // Thêm namespace mới cho trang khác
  about: {
    title: string;
    content: string;
  };
}

const translations: Record<Locale, Translations> = {
  vi: {
    home: {
      // ...
      newSection: {
        title: "Tiêu đề mới",
        description: "Mô tả mới",
      },
    },
    about: {
      title: "Giới thiệu",
      content: "Nội dung giới thiệu",
    },
  },
  en: {
    home: {
      // ...
      newSection: {
        title: "New Title",
        description: "New Description",
      },
    },
    about: {
      title: "About Us",
      content: "About content",
    },
  },
};
```

## Ưu Điểm

✅ **Tập trung**: Tất cả translations ở một nơi  
✅ **Dễ maintain**: Dễ tìm và sửa  
✅ **Type-safe**: TypeScript kiểm tra lỗi  
✅ **Tái sử dụng**: Dùng chung cho nhiều component  
✅ **Mở rộng**: Dễ thêm translations mới  

## Ví Dụ

### Trong Page Component

```typescript
// src/app/[locale]/page.tsx
import { getTranslations, type Locale } from "@/lib/translations";

export default async function HomePage({ params }) {
  const { locale } = await params;
  const safeLocale: Locale = locale === "en" ? "en" : "vi";
  const t = getTranslations(safeLocale);

  return (
    <div>
      <h1>{t.home.banner.heading}</h1>
      <p>{t.home.banner.description}</p>
    </div>
  );
}
```

### Trong Component

```typescript
// src/components/MyComponent.tsx
import { getTranslations, type Locale } from "@/lib/translations";

export function MyComponent({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return <button>{t.common.contact}</button>;
}
```

## Lưu Ý

- Luôn dùng `type Locale = "vi" | "en"` từ translations
- Kiểm tra TypeScript để đảm bảo translations đầy đủ
- Thêm translations cho cả 2 ngôn ngữ (vi và en)
