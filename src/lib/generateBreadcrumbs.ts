// src/lib/generateBreadcrumbs.ts
export function generateBreadcrumbs(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  const breadcrumbs = [{ label: 'ホーム', href: '/' }];

  let path = '';
  const nameMap: Record<string, string> = {
    services: 'サービス紹介',
    consulting: '製造業コンサルティング',
    retail: '物販事業',
    accessories: '車用アクセサリ',
    tools: '道具',
    antiques: '骨董品',
    translation: '通訳・翻訳サービス',
    about: '会社概要',
    contact: 'お問い合わせ',
  };

  for (const part of parts) {
    path += `/${part}`;
    breadcrumbs.push({
      label: nameMap[part] ?? decodeURIComponent(part),
      href: path,
    });
  }

  return breadcrumbs;
}
