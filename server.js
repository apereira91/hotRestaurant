const express = require('express');
const path = require('path');
//setting up express App
const app = express();
const PORT =  process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const reservations = [
  {
    name: 'Bill Bowerman',
    phoneNumber: '123-456-7890',
    email: 'bbowerman@nike.com'
  }
]
//Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get('/tables', (req, res) => {
  res.sendFile(path.join(__dirname, 'view.html'));
});
app.get('/reserve', (req, res) => {
  res.sendFile(path.join(__dirname, 'make.html' ));
});
app.get('/api/reservations/', (req, res) => {
  return res.json(reservations);
});
//starting the server function
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});