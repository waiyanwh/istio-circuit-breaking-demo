const express = require('express');
const app = express();
const os = require('os')

// Adjust the error rate by changing this value
const ERROR_RATE = process.env.ERROR_RATE; // 50% error rate

// to get the hostname
const hostname = os.hostname();

app.get('/purchase', (req, res) => {
  // Generate a random number between 0 and 1
  const randomValue = Math.random();
  // to get the hostname
  const hostname = os.hostname();

  // If the random value is less than the ERROR_RATE, return an error
  if (randomValue < ERROR_RATE) {
    res.status(500).send(`Error purchasing ticket from ${hostname}`);
  } else {
    res.send(`Ticket purchased successfully from ${hostname}`);
  }
});

app.listen(8080, () => {
  console.log('Ticket purchase service listening on port 8080');
});
