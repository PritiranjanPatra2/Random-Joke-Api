import express from 'express';
import { jokes } from './joke.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    try {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        res.status(200).json(
            {
                "message":"Sucess",
                "joke": jokes[randomIndex]
            }
        );
    } catch (error) {
        log(`Error fetching joke: ${error.message}`);
        res.status(500).json({
            "message": "Internal Server Error",
            "error": error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
