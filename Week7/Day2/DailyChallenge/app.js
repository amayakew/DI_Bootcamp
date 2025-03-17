const express = require('express');
const app = express();

app.use(express.json());


// Manually enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific methods
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200); // Respond to preflight requests
    }

    next();
});

app.post('/api/check-emoji', (req,res) => {
    const {emoji, option} = req.body;
    const emojiObject = emojis.find(e => e.emoji == emoji);

    if (!emojiObject) {
        res.sendStatus(404);
    }
    const correct = emojiObject.name == option;
    res.json({correct});
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Node.js web server at port 8080 is running..`);
});

const emojis = [
    {emoji: '😊', name: 'smile'},
    {emoji: '🤣', name: 'lol'},
    {emoji: '❤', name: 'love'},
    {emoji: '🌹', name: 'rose'},
    {emoji: '🐱‍👤', name: 'ninja cat'},
    {emoji: '🎉', name: 'party'},
    {emoji: '🍩', name: 'donut'},
    {emoji: '☕', name: 'coffee'},
    {emoji: '⛱', name: 'beach'}
];

const getRandomEmoji = () => {
    const randomEmojis = getThreeRandomEmojis()
    const randomEmoji = randomEmojis[0]

    let options = [randomEmoji.name,randomEmojis[1].name,randomEmojis[2].name];
    options = options.sort(() => Math.random() - 0.5);

    return {emoji: randomEmoji.emoji, options};
};

const getThreeRandomEmojis = () => {
    const emojisCopy = [...emojis]
    const shuffledEmojis = emojisCopy.sort(() => Math.random() - 0.5);
    return [shuffledEmojis[0], shuffledEmojis[1], shuffledEmojis[2]]
}
app.get('/api/random-emoji',(req,res) => {
    res.send(getRandomEmoji());
});