import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-center w-full mb-8">
          Next.js Fetching & Caching Examples
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          <Link
            href="/static"
            className="group flex flex-col items-center justify-center p-8 bg-white border-2 border-gray-300 rounded-xl shadow-md hover:shadow-xl transition-all hover:border-blue-600 hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-black">
              Static Fetching &rarr;
            </h2>
          </Link>

          <Link
            href="/dynamic"
            className="group flex flex-col items-center justify-center p-8 bg-white border-2 border-gray-300 rounded-xl shadow-md hover:shadow-xl transition-all hover:border-yellow-600 hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-black">
              Dynamic Fetching &rarr;
            </h2>
          </Link>

          <Link
            href="/revalidate"
            className="group flex flex-col items-center justify-center p-8 bg-white border-2 border-gray-300 rounded-xl shadow-md hover:shadow-xl transition-all hover:border-green-600 hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-black">
              Revalidated (ISR) &rarr;
            </h2>
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">
          Check <code>app/</code> folder for code examples.
        </p>
      </footer>
    </div>
  );
}
