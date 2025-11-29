// Shared spoiler detection utility used across client pages/components.
// Exported as both named and default for convenience in imports.
export const spoilerKeywords = [
  'dies',
  'killer',
  'final boss',
  'ending',
  'spoiler',
  'death',
  'murder',
  'fight',
  'loses',
  'kills',
  'eliminated',
  'lost'
];

export function isSpoiler(text) {
  if (!text) return false;
  return spoilerKeywords.some(keyword => text.toLowerCase().includes(keyword));
}

export default isSpoiler;
