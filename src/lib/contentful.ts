import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchProducts() {
  const entries = await client.getEntries({ content_type: 'product' });

  return entries.items.map((item: any) => {
    const image = item.fields.image;
    const imageUrl = image?.fields?.file?.url ? 'https:' + image.fields.file.url : '';

    return {
      title: item.fields.title,
      slug: item.fields.slug,
      description: item.fields.description,
      baseUrl: item.fields.baseUrl,
      image: imageUrl,
      price: item.fields.price,
      available: item.fields.available,
      category: item.fields.category,
    };
  });
}
