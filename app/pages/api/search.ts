// // pages/api/search.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import db from '@/lib/db';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { query } = req.query;

//   if (!query) {
//     return res.status(400).json({ error: "Query parameter is required" });
//   }

//   try {
//     const data = await db.$queryRaw`
//       SELECT name, url, sku, selling_price
//       FROM product
//       WHERE name LIKE ${'%' + query + '%'}
//       ORDER BY selling_price DESC
//       LIMIT 5
//     `;

//     res.status(200).json({ data });
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}