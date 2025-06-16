const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Jokes array
const jokes = [
    "What does a storm cloud wear under his raincoat? Thunderwear.",
    "What do kids play when their mom is using the phone? Bored games.",
    "What do you call an ant who fights crime? A vigilANTe!",
    "Why are snails slow? Because they're carrying a house on their back.",
    "What's the smartest insect? A spelling bee!",
    "What is fast, loud and crunchy? A rocket chip.",
    "How does the ocean say hi? It waves!",
    "What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.",
    "Why did the teddy bear say no to dessert? Because she was stuffed.",
    "Why did the soccer player take so long to eat dinner? Because he thought he couldn't use his hands.",
    "Name the kind of tree you can hold in your hand? A palm tree!"
];

app.use(cors());

app.get('/joke', (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json({ joke: randomJoke });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
