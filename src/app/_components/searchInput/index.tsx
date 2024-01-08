
type SearchInputI = {
    searchValue:string;
    handleSearchValue:(e:any)=> void
}


export default function SearchInput ({searchValue,handleSearchValue}:SearchInputI) {
  return (
    <div className="relative">
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchValue}
        placeholder="Search..."
        className="py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35"
          />
          <circle cx="10.5" cy="10.5" r="7.5" />
        </svg>
      </div>
    </div>
  );
};

