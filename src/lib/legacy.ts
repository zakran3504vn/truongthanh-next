import fs from "node:fs";
import path from "node:path";

type Locale = "vi" | "en";

function stripBetween(html: string, start: string, end: string) {
  const s = html.indexOf(start);
  if (s === -1) return html;
  const e = html.lastIndexOf(end);
  if (e === -1 || e <= s) return html;
  return html.slice(s + start.length, e);
}

function removeScripts(html: string) {
  return html.replace(/<script\b[\s\S]*?<\/script>/gi, "");
}

function removePhp(html: string) {
  return html.replace(/<\?php[\s\S]*?\?>/g, "");
}

function normalizeAssetPaths(html: string) {
  // về dạng tuyệt đối /images, /css, /js
  return (
    html
      // src/href="../images/.." hoặc "images/.."
      .replace(/(src|href)=\"\.\.\/images\//g, '$1="/images/')
      .replace(/(src|href)=\"images\//g, '$1="/images/')
      .replace(/(src|href)=\"\.\.\/css\//g, '$1="/css/')
      .replace(/(src|href)=\"css\//g, '$1="/css/')
      .replace(/(src|href)=\"\.\.\/js\//g, '$1="/js/')
      .replace(/(src|href)=\"js\//g, '$1="/js/')
      // inline style url(../images/..) / url(images/..)
      .replace(/url\(\.\.\/images\//g, "url(/images/")
      .replace(/url\(images\//g, "url(/images/")
  );
}

function rewriteInternalLinks(html: string, locale: Locale) {
  const aboutHref = locale === "vi" ? "/vi/gioi-thieu" : "/en/about-us";
  // một số link hay gặp trong template
  return html
    .replace(/href=\"about-us\/index\.php\"/g, `href="${aboutHref}"`)
    .replace(/href=\"\.\.\/about-us\/index\.php\"/g, `href="${aboutHref}"`)
    .replace(/href=\"services\/index\.php\"/g, `href="/${locale}/services"`)
    .replace(/href=\"\.\.\/services\/index\.php\"/g, `href="/${locale}/services"`)
    .replace(/href=\"news\/index\.php\"/g, `href="/${locale}/news"`)
    .replace(/href=\"\.\.\/news\/index\.php\"/g, `href="/${locale}/news"`)
    .replace(/href=\"contact\/index\.php\"/g, `href="/${locale}/contact"`)
    .replace(/href=\"\.\.\/contact\/index\.php\"/g, `href="/${locale}/contact"`)
    .replace(/href=\"pricing\/index\.php\"/g, `href="/${locale}/pricing"`)
    .replace(/href=\"\.\.\/pricing\/index\.php\"/g, `href="/${locale}/pricing"`)
    // template html links
    .replace(/href=\"index\.html\"/g, `href="/${locale}"`)
    .replace(/href=\"index\.php\"/g, `href="/${locale}"`)
    .replace(/href=\"page-about\.html\"/g, `href="${aboutHref}"`)
    .replace(/href=\"page-services\.html\"/g, `href="/${locale}/services"`)
    .replace(/href=\"page-contact\.html\"/g, `href="/${locale}/contact"`)
    .replace(/href=\"news-details\.html\"/g, `href="/${locale}/news/details"`);
}

// Loại bỏ các phần "chrome" dùng chung mà layout đã render (tránh trùng lặp)
// như cursor, cursor-follower, preloader...
function removeSharedChrome(html: string) {
  // div.cursor, div.cursor-follower, div.preloader (cho phép khoảng trắng / xuống dòng)
  return html
    .replace(
      /<div\s+class=["']cursor["']\s*><\/div>\s*/gi,
      ""
    )
    .replace(
      /<div\s+class=["']cursor-follower["']\s*><\/div>\s*/gi,
      ""
    )
    .replace(
      /<div\s+class=["']preloader["']\s*><\/div>\s*/gi,
      ""
    );
}

export function loadLegacyPageHtml(opts: {
  legacyFileRelativeToRepoRoot: string;
  locale: Locale;
}) {
  // process.cwd() = truongthanh-next
  const abs = path.join(process.cwd(), "..", opts.legacyFileRelativeToRepoRoot);
  const raw = fs.readFileSync(abs, "utf8");

  // lấy nội dung trong <body>...</body>
  let html = stripBetween(raw, "<body>", "</body>");
  html = removePhp(html);
  html = removeScripts(html);
  html = normalizeAssetPaths(html);
  html = rewriteInternalLinks(html, opts.locale);
  html = removeSharedChrome(html);

  return html.trim();
}

