export default function HeaderSearch({src}) {
    return (
    
    <nav className="bg-black border-gray-200 dark:bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <a href="/" className="flex items-center">
            <img src={src.src} className="h-16" alt="Logo" />
        </a>
        
        <div className="flex items-center justify-center space-x-5">
        
        <a className="flex items-center" href="/search">
            <div className="flex space-x-2">
                <input
                    type="text"
                    className="shadow-[#4f19bb] block w-full px-4 py-2 text-black bg-white 
                    rounded-full shadow-md focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-[#4f19bb] rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        href="/search"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </a>

        <a
                href="/login"
                className="text-lg bg-[#4f19bb] font-semibold py-2 px-6 
                rounded-lg font-medium shadow-lg 
                hover:font-bold shadow-[#4f19bb]"
              >
                Login
              </a>
    
        </div>
      </div>
    </nav>
    
      );
};
