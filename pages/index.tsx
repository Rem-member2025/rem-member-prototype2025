import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Head>
        <title>REM-Member</title>
      </Head>
      <main className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">REM-Member Prototype</h1>
        <p className="mb-4">This is a working UI layout for the buyer/seller portal.</p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border p-4 rounded">
            <h2 className="font-semibold">Buyer View</h2>
            <p>Search, filter, and purchase remnant materials.</p>
          </div>
          <div className="border p-4 rounded">
            <h2 className="font-semibold">Seller View</h2>
            <p>Upload and manage material listings and certifications.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
