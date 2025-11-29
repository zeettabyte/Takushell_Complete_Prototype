"use client";
import React, { useState, useEffect } from 'react';
import isSpoiler from '../ai/spoilerDetector';

export default function FeedPage() {
  const [posts, setPosts] = useState([
    { id: 1, user: 'Iamlegend20', content: 'Jujutsu Kaisen S2 finale got me 😭 (no spoilers!)' },
    { id: 2, user: 'MochaBunni3x', content: 'Just finished Demon Slayer – wow!' },
    { id: 3, user: 'SenpaiSallie', content: 'Gachiakuta is really good so far ;3' },
    { id: 4, user: 'Zeetheweeb', content: '[Spoiler Hidden]' },
    { id: 5, user: 'Zenetsuslefttoebean', content: 'If I speak on The summer Hikaru Died I might get banned 😭 (no spoilers!)' },
    { id: 6, user: 'OtakuHottie', content: '@MochaBunni3x I just finished Demon slayer too! waiting on that next season to start BAD xD' }
  ]);

  const [newPost, setNewPost] = useState('');

  // Optional: ensure no body margin if no global CSS
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#000';
  }, []);

  const handlePost = () => {
    if (!newPost.trim()) return;

    const filteredContent = isSpoiler(newPost) ? '[Spoiler Hidden]' : newPost;

    const userPost = {
      id: posts.length + 1,
      user: 'You',
      content: filteredContent
    };

    setPosts(prev => [userPost, ...prev]);
    setNewPost('');
  };

  return (
    <div className="min-h-screen w-full bg-black text-green-400 overflow-x-hidden">
      <main className="p-6 font-mono max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 border-b border-green-700 pb-2">Community Feed</h1>

        <textarea
          className="w-full p-3 mb-4 bg-green-950 text-green-300 border border-green-600 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
          rows={4}
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />

        <button
          className="px-4 py-2 bg-green-600 text-black font-semibold rounded hover:bg-green-500 transition"
          onClick={handlePost}
        >
          Post
        </button>

        <section className="mt-6 space-y-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className={`p-4 rounded border ${
                post.user === 'MrTakuBot'
                  ? 'bg-green-800 text-green-100 border-green-500'
                  : 'bg-green-950 text-green-300 border-green-800'
              }`}
            >
              <h3 className="font-semibold text-green-400">@{post.user}</h3>
              <p>{post.content}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}