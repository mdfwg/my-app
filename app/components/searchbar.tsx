"use client";
import { useState } from 'react';

export default function SearchBar() {
  const [inputVal, setInputVal] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/search?query=${inputVal}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();

      const event = new CustomEvent('search-results', { detail: data.data });
      window.dispatchEvent(event);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-8 text-center">
      <input
        type="text"
        value={inputVal}
        onChange={handleInputChange}
        placeholder="Search products..."
        className="p-2 border border-gray-300 rounded-lg"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
        Search
      </button>
    </form>
  );
}
