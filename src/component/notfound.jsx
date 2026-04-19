 export default function NotFound(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <div className="text-center max-w-md w-full">
        <h1 className="text-[120px] sm:text-[160px] font-extrabold text-white">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-200 text-sm sm:text-base mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <a
          href="/"
          className="inline-block rounded-lg bg-white px-6 py-3 text-sm sm:text-base font-semibold text-black transition hover:bg-gray-500"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};



