const express = require('express');
// const movies = require('./movies.json');
const fs = require('fs').promises;
const path = require('path');

const app = express();

const moviesPath = path.resolve(__dirname, 'movies.json');

app.use(express.json());

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pode ser lido: ${error}`);
  }
};

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const movieReader = await readFile();

    const findMovie = movieReader.find((movie) => movie.id === Number(id));

    res.status(200).json({ movie: findMovie });
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.get('/movies', async (req, res) => {
  try {
    const movieReader = await readFile();
    res.status(200).json({ movieReader });
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const movieReader = readFile();
    const { movie, price } = req.body;
    const newMovie = {
      id: movieReader[movieReader.length - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify(...movieReader, newMovie);
    await fs.writeFile(moviesPath, allMovies);
    res.status(201).json({ newMovie });
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readFile();

    const findIndex = movies.findIndex(({ movieId }) => movieId === Number(id));

    movies[findIndex] = { id: Number(id), movie, price };

    const updatedMovies = JSON.stringify(movies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(200).json(movies[findIndex]);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const filteredMovies = movies.filter((movie) => movie.id !== Number(id));
    const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(204).end();
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = app;