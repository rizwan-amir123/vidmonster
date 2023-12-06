export default function Header({src}) {
return (

<nav className="bg-black border-gray-200 dark:bg-black">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
    <a href="/" className="flex items-center">
        <img src={src.src} className="h-16" alt="Logo" />
    </a>
  
    <div className="flex items-center justify-center space-x-5">
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

