import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '4fluvw84', 
  dataset: 'production', 
  useCdn: true,
});

export default async function handler(req: { query: { category: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
  const { category } = req.query;

  try {
    // Fetch products from Sanity based on category
    const query = `*[_type == "product" && category == $category]`;
    const products = await client.fetch(query, { category });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching products' });
  }
}
