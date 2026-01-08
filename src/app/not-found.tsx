import "./globals.css";

export default function NotFound() {
  return (
    <html>
      <body>
        <main className="min-h-screen bg-[#FAFAF9] text-neutral-900 flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-black flex items-center justify-center rounded-2xl">
                <div className="w-10 h-10 bg-[#FF5117] rounded-full" />
              </div>
            </div>

            <h1 className="text-8xl font-bold text-neutral-200 mb-2">404</h1>

            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              Page not found
            </h2>

            <p className="text-neutral-500 mb-8 leading-relaxed">
              It seems this page got lost along the way. Don&apos;t worry,
              we&apos;ll help you get back.
            </p>

            {}
            <a
              href="landing/en-US"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-neutral-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
