// import sanityClient from '@sanity/client';

// const client = sanityClient({
//   projectId: '4fluvw84', 
//   dataset: 'production', 
//   useCdn: true,
// });

// export default async function handler(req: { query: { category: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
//   const { category } = req.query;

//   try {
//     // Fetch products from Sanity based on category
//     const query = `*[_type == "product" && category == $category]`;
//     const products = await client.fetch(query, { category });

//     res.status(200).json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching products' });
//   }
// }
import { NextApiRequest, NextApiResponse } from 'next';
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '4fluvw84',
  dataset: 'production',
  useCdn: true,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Extract the category parameter from the query.
  // If it's an array, take the first element.
  const { category } = req.query;
  const categoryParam = Array.isArray(category) ? category[0] : category;

  try {
    // Fetch products from Sanity based on category
    const query = `*[_type == "product" && category == $category]`;
    const products = await client.fetch(query, { category: categoryParam });

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: 'Error fetching products' });
  }
}
