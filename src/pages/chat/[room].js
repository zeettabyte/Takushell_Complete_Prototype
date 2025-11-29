
'use client';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import isSpoiler from '../../ai/spoilerDetector';

export default function ChatRoom() {
  const router = useRouter();
  const { room } = router.query;

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!room) return;
    setMessages([{ id: 1, user: 'Admin', content: `Welcome to the ${room} chat room!` }]);
  }, [room]);

  const handleSend = () => {
    if (!input.trim()) return;
    const filteredContent = isSpoiler(input) ? '[Spoiler Hidden]' : input;

    setMessages(prev => [
      { id: prev.length + 1, user: 'You', content: filteredContent },
      ...prev,
    ]);
    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!room) return <p className="text-green-400 p-4">Loading chat room...</p>;

  return (
    <main className="min-h-screen w-screen bg-black text-green-400 font-mono p-6 m-0">
      <div className="max-w-3xl mx-auto flex flex-col h-full">
        <div className="mb-4">
          <Link href="/anime" className="text-green-500 hover:underline">
            ← Back to Anime Rooms
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-4 capitalize">
          {room.replace(/-/g, ' ')} Chat Room
        </h1>

        <section className="flex-grow overflow-y-auto mb-6 bg-green-950 p-4 rounded h-[55vh]">
          {messages.map((msg) => (
            <article key={msg.id} className="border-b border-green-700 py-2 last:border-none">
              <span className="text-green-400 font-semibold">@{msg.user}</span>
              <p className="ml-2 break-words">{msg.content}</p>
            </article>
          ))}
          <div ref={messagesEndRef} />
        </section>

        <div>
          <textarea
            className="w-full p-3 mb-3 bg-green-900 rounded text-green-300 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
            rows={3}
            placeholder="Type your message (spoilers will be hidden)..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <button
            className="w-full bg-green-600 hover:bg-green-700 text-black font-bold py-2 rounded transition"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}