"use client";
import { useState, useEffect } from 'react';
import Card from './card';

interface Product {
  name: string;
  url: string;
  sku: string;
  selling_price: number;
}

export default function SearchResults() {
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    const handleSearchResults = (event: Event) => {
      const customEvent = event as CustomEvent<Product[]>;
      setSearchResults(customEvent.detail);
    };

    window.addEventListener('search-results', handleSearchResults);

    return () => {
      window.removeEventListener('search-results', handleSearchResults);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {searchResults.map((product) => (
        <Card key={product.sku} product={product} />
      ))}
    </div>
  );
}
