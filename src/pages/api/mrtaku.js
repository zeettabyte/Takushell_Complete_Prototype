// src/pages/api/mrtaku.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Accept either `message` (older shape) or `question` (client sends this)
  const userMessage = req.body.message || req.body.question || 'Who created Naruto?';

  // Simulate an AI-like response (kept intentionally simple for the prototype)
  const fakeResponses = [
    `Naruto was created by Masashi Kishimoto, a Japanese manga artist. He began publishing the series in 1999 in *Weekly Shōnen Jump*, and it ran until 2014, becoming one of the most iconic and best-selling manga series in history.

Why did Kishimoto create Naruto?

1. **Personal Interest in Ninjas and Samurai**  
Kishimoto was fascinated by ninja culture, martial arts, and samurai films, especially works by Akira Kurosawa and anime like *Dragon Ball*. He wanted to blend action and emotion into a story that felt personal.

2. **Story of Loneliness and Acceptance**  
Naruto is a boy who was rejected by society. Kishimoto used Naruto’s story to reflect the universal desire for recognition — something many readers relate to.

3. **Editor Influence**  
Initially, Naruto was a literal fox demon in a one-shot manga. Editors suggested changing him into a human with a demon inside to make him more relatable.

Legacy:  
- Naruto has sold over 250 million copies worldwide.  
- It led to anime series (*Naruto*, *Shippuden*), films, games, and the *Boruto* sequel.  
- Kishimoto became a household name in global manga culture.

Would you like a timeline of the Naruto series next?`
  ];

  const randomResponse = fakeResponses[Math.floor(Math.random() * fakeResponses.length)];

  // Respond with a fake AI message
  res.status(200).json({ answer: randomResponse });
}
