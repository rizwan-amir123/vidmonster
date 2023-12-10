export default function Header({src}) {
return (

<nav className="bg-black border-gray-200 dark:bg-black">
  <div className="px-5 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-1">
    <a href="/" className="flex items-center">
        <img src={src.src} className="h-16" alt="Logo" />
    </a>
  
    <div className="flex items-center justify-center space-x-5">
    <a
            href="/video"
            className="text-lg bg-[#4f19bb] font-semibold py-2 px-6 
            rounded-lg font-medium shadow-lg 
            hover:font-bold shadow-[#4f19bb]"
          > 
          <div className="group flex flex-row">
          Watch  
            <svg className="group-hover:rotate-180 ml-2 mt-2 w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1.984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L2.506 1.139A1 1 0 0 0 1 1.984Z"/>
  </svg>
  </div>
          </a>

    </div>
  </div>
</nav>

  );
};

