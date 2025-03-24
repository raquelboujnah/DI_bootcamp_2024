// const emojis = [
//     {
//         emoji: "😀",
//         name: "Grinning Face"
//     },
//     {
//         emoji: "😂",
//         name: "Face with Tears of Joy"
//     },
//     {
//         emoji: "❤️",
//         name: "Red Heart"
//     },
//     {
//         emoji: "😍",
//         name: "Smiling Face with Heart-Eyes"
//     },
//     {
//         emoji: "👍",
//         name: "Thumbs Up"
//     },
//     {
//         emoji: "🙏",
//         name: "Folded Hands"
//     },
//     {
//         emoji: "🔥",
//         name: "Fire"
//     },
//     {
//         emoji: "🎉",
//         name: "Party Popper"
//     },
//     {
//         emoji: "🌟",
//         name: "Glowing Star"
//     },
//     {
//         emoji: "🎈",
//         name: "Balloon"
//     }
// ];

// module.exports = emojis



const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🎉', name: 'Party' },
    { emoji: '📚', name: 'Books' },
    { emoji: '🏀', name: 'Basketball' },
    { emoji: '🎵', name: 'Music Note' },
    { emoji: '🍎', name: 'Apple' },
    { emoji: '❤️', name: 'Heart' },
    { emoji: '🌟', name: 'Star' },
    { emoji: '🦋', name: 'Butterfly' },
    { emoji: '⚽', name: 'Soccer Ball' },
    { emoji: '🏡', name: 'House' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '📷', name: 'Camera' },
    { emoji: '🚌', name: 'Bus' },
    { emoji: '🎂', name: 'Birthday Cake' },
    { emoji: '✈️', name: 'Airplane' }
];

function getRandomEmojiOptions(emojis) {
    // Pick a random emoji
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const correctEmoji = emojis[randomIndex];

    // Create a set of options including the correct answer
    const options = new Set();
    options.add(correctEmoji.name);

    while (options.size < 4) {
        const randomOption = emojis[Math.floor(Math.random() * emojis.length)].name;
        options.add(randomOption);
    }

    // Convert the set to an array and shuffle
    const shuffledOptions = [...options].sort(() => Math.random() - 0.5);

    return {
        emoji: correctEmoji.emoji,
        correctAnswer: correctEmoji.name,
        options: shuffledOptions
    };
}


module.exports = {emojis, getRandomEmojiOptions}