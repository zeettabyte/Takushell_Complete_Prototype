// src/pages/anime.js
import Head from 'next/head';
import Link from 'next/link';

export default function AnimePage() {
  const animeRooms = [
    {
      id: 'nana',
      title: 'Nana',
      synopsis: 'Discuss punk, heartbreak, and friendship in Nana.',
      img: '/assets/nana.png',
    },
    {
      id: 'death-note',
      title: 'Death Note',
      synopsis: 'Debate justice and morality in Light vs L.',
      img: '/assets/deathnote.jpg',
    },
    {
      id: 'another',
      title: 'Another',
      synopsis: 'Unravel the mysterious curse haunting the classroom.',
      img: '/assets/another.jpg',
    },
    {
      id: 'jujutsu-kaisen',
      title: 'Jujutsu Kaisen',
      synopsis: 'Join the chat about sorcerers vs curses.',
      img: '/assets/jujutsu-kaisen.png',
    },
    {
      id: 'attack-on-titan',
      title: 'Attack on Titan',
      synopsis: 'Chat about humans vs titans.',
      img: '/assets/aot.jpg',
    },
    {
      id: 'spy-x-family',
      title: 'Spy x Family',
      synopsis: 'Talk about the spy, assassin, and telepath family.',
      img: '/assets/spyxfamily.png',
    },
    {
      id: 'terror-in-resonance',
      title: 'Terror in Resonance',
      synopsis: 'Explore the minds of two teenage terrorists in Tokyo.',
      img: '/assets/terror-in-resonance.jpg',
    },
    {
      id: 'naruto',
      title: 'Naruto',
      synopsis: 'Talk about the journey from ninja dropout to Hokage.',
      img: '/assets/naruto.jpg',
    },
    {
      id: 'dragonball-z',
      title: 'Dragonball Z',
      synopsis: 'Relive the Saiyan battles and power-ups that defined shonen.',
      img: '/assets/dragon-ball-z.jpg',
    },
  ];

  return (
    <>
      <Head>
        <title>Anime Chat Rooms | TakuShell</title>
      </Head>
      <main className="min-h-screen p-6 bg-black text-green-400 font-sans">
        <h1 className="text-3xl font-bold mb-8 text-center text-green-600">
          Join an Anime Chat Room
        </h1>

        <div className="grid gap-6 md:grid-cols-3">
          {animeRooms.map((room) => (
            <Link key={room.id} href={`/chat/${room.id}`}>
              <div className="cursor-pointer bg-zinc-900 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-200 flex flex-col">
                <div className="relative w-full aspect-[2/3] overflow-hidden">
                  <img
                    src={room.img}
                    alt={room.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h2 className="text-xl font-semibold text-green-300">
                    {room.title}
                  </h2>
                  <p className="text-green-500 text-sm">{room.synopsis}</p>
                  <p className="mt-2 text-sm text-green-400 font-semibold">
                    Join Chat Room →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/" passHref>
            <span className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Back to Home
            </span>
          </Link>
        </div>
      </main>
    </>
  );
}