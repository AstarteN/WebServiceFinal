import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import chalk from 'chalk'
import { getCompliment } from './getCompliment.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission and display compliment
app.post('/generate', async (req, res) => {

  console.log(chalk.bgCyan('Request received with the following data:'), req.body);



  const name = req.body.name || 'Friend'; // Default to 'Friend' if no name provided

  try {
    const compliment = getCompliment()
    const personalizedCompliment = `Hey ${name}, ${compliment}`;
    const htmlResponse = `
      <h1 style="color: #ff69b4;">Compliment for ${name}</h1>
      <p style="font-size: 18px;">${personalizedCompliment}</p>
      <a href="/" style="color: #ff69b4; text-decoration: none; font-size: 16px;">Go back</a>
    `;
    res.send(htmlResponse);
  } catch (error) {
    console.error('Error getting compliment:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Redirect on GET to prevent accidental form resubmission
app.get('/generate', (req, res) => {
  res.redirect(303, '/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
