import Link from 'next/link';

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', { cache: 'no-store' }); // Dynamic content
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function DynamicPage() {
    const data = await getData();
    const time = new Date().toLocaleTimeString();

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-4">Dynamic Fetching</h1>
            <p className="mb-4">
                This page fetches data on every request (SSR). The timestamp below will update on every refresh.
            </p>
            <div className="bg-yellow-100 p-4 rounded-lg shadow-md mb-6 border border-yellow-200 text-black">
                <h2 className="text-xl font-semibold">Fetched Data:</h2>
                <p><strong>Title:</strong> {data.title}</p>
                <p className="mt-2 text-sm text-gray-700">Rendered at: {time}</p>
            </div>
            <Link href="/" className="text-blue-500 hover:text-blue-700 hover:underline font-semibold">
                &larr; Back to Home
            </Link>
        </div>
    );
}
