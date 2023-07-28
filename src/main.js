import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';
import { END_POINT, ERROR_MESSAGE, OPENAI_COMPLETIONS } from './constants/index.js';
import { PORT_NUMBER } from '../config/index.js';

const app = express();
const port = PORT_NUMBER;

app.use(bodyParser.json());
app.use(cors());

app.post(END_POINT.CODE_GENERATION, async (req, res) => {
  const { prompt, apiKey } = req.body;
  try {
    const response = await axios.post(
      OPENAI_COMPLETIONS,
      {
        model: 'text-davinci-003',
        prompt,
        max_tokens: 1000,
        temperature: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      },
    );
    if (response.data && response.data.choices) {
      res.json({
        message: response.data.choices[0].text,
      });
    } else {
      res.status(400).send({ error: ERROR_MESSAGE[400] });
    }
  } catch (error) {
    if (error.response && error.response.status) {
      const statusCode = error.response.status;
      if (statusCode === 401) {
        res.status(401).send({ error: ERROR_MESSAGE[401] });
        return;
      }
    }
    res.status(500).send({
      error: ERROR_MESSAGE[500],
    });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to gpt api server!');
});

app.listen(process.env.PORT || port);
