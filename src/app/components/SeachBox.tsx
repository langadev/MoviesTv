'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

function SearchBox() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      router.push(`/search/${search}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between px-5 max-w-6xl mx-auto"
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 bg-transparent flex-1 outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className={`ml-2 text-amber-600 transition duration-200 ${
          search ? 'hover:text-amber-500' : 'opacity-50 cursor-not-allowed'
        }`}
        disabled={search === ''}
        aria-label="Search"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
