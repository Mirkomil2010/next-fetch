import Link from 'next/link';

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', { next: { revalidate: 10 } }); // Revalidates every 10 seconds
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function RevalidatePage() {
    const data = await getData();
    const time = new Date().toLocaleTimeString();

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-4">Revalidated Fetching (ISR)</h1>
            <p className="mb-4">
                This page fetches data and caches it for 10 seconds.
                <br />
                Refresh within 10s: Timestamp unchanged.
                <br />
                Refresh after 10s: Timestamp updates.
            </p>
            <div className="bg-green-100 p-4 rounded-lg shadow-md mb-6 border border-green-200 text-black">
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
