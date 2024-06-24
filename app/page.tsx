// import db from "@/lib/db";
// import Card from "./components/card";
// import SearchBar from './components/searchbar';
// import SearchResults from './components/SearchResults';

// export default async function Home() {
//   // Fetch the top 5 most expensive products
//   // const data: Array<{ name: string; url: string; sku: string; selling_price: number }> = await db.$queryRaw`
//   //   SELECT name, url, sku, selling_price FROM product ORDER BY selling_price DESC LIMIT 5
//   // `;

//   const seperti = '%super%';

//   const data: Array<{ name: string; url: string; sku: string; selling_price: number }> = await db.$queryRaw`
//     SELECT name, url, sku, selling_price FROM product WHERE name LIKE ${seperti} ORDER BY selling_price DESC LIMIT 5
//   `;

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <div className="w-full max-w-6xl mb-8">
//         <h1 className="text-3xl font-bold text-center mb-8">Search Products</h1>
//         <SearchBar />
//         <SearchResults />
//       </div>

//       <div className="w-full max-w-6xl">
//         <h1 className="text-3xl font-bold text-center mb-8">Top 5 Most Expensive Products</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {data.map((product) => (
//             <Card key={product.sku} product={product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// app/page.tsx
import db from '@/lib/db';
import Card from './components/card';
import SearchBar from './components/searchbar';
import SearchResults from './components/SearchResults';

export default async function Page() {
  // Fetch the top 5 most expensive products
  const data: Array<{ name: string; url: string; sku: string; selling_price: number }> = await db.$queryRaw`
    SELECT name, url, sku, selling_price FROM product ORDER BY selling_price DESC LIMIT 10
  `;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl mb-8">
        <h1 className="text-3xl font-bold text-center mb-8">Search Products</h1>
        <SearchBar />
        <SearchResults />
      </div>

      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-center mb-8">Top 5 Most Expensive Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((product) => (
            <Card key={product.sku} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
