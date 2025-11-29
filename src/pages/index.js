"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

function HomePage() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAskBot = async () => {
    if (!userInput.trim()) return;
    setLoading(true);
    setError(null);
    setResponse('');

    try {
      const res = await fetch('/api/mrtaku', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: userInput }),
      });

      if (!res.ok) throw new Error('Failed to fetch answer.');
      const data = await res.json();
      setResponse(data.answer);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>TakuShell Home</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-4 py-10 font-sans">
        <section className="text-center max-w-4xl mx-auto">
          <img src="/assets/Takushell-logo-.png" alt="TakuShell Logo" className="mx-auto mb-6 w-32" />
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            Welcome to <span className="text-green-400">TakuShell</span>
          </h1>
          <p className="mb-6 text-lg text-gray-300">
            Your inclusive, spoiler-safe anime & manga community space.
          </p>
          <div className="flex justify-center gap-6 mb-10">
            <Link
              href="/feed"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-lg transition"
            >
              Enter Community Feed
            </Link>
            <Link
              href="/anime"
              className="px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black rounded-xl text-lg transition"
            >
              Find Your Crowd
            </Link>
          </div>

          {/* Anime Chatbot */}
          <div className="mt-10 text-left bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl font-semibold text-green-400 mb-4">Ask Mr. Taku (Anime Lore Bot)</h2>
            <p className="text-gray-300 mb-4">
              Ask about anime release dates, creators, cultural references, historical context, and more.
            </p>
            <textarea
              rows={3}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="e.g. What is the historical inspiration behind Attack on Titan?"
              className="w-full p-3 rounded bg-gray-700 text-white mb-3"
            />
            <button
              onClick={handleAskBot}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              disabled={loading}
            >
              {loading ? 'Asking...' : 'Ask Mr. Taku'}
            </button>

            {error && <p className="text-red-500 mt-2">{error}</p>}

            {response && (
              <div className="mt-4 bg-gray-700 p-4 rounded text-white">
                <h3 className="text-lg font-bold text-green-300 mb-2">Mr. Taku says:</h3>
                <p>{response}</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
