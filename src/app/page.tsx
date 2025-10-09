import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Selofy Documentation</h1>
        <p className="text-xl mb-8">Welcome to Selofy's official documentation</p>
        <Link
          href="/docs"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go to Documentation
        </Link>
      </div>
    </main>
  )
}
