const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); 
const app = express();
const bmiRoutes = require('./routes/bmiRoutes');
const PORT = 3000;


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('assets'))

app.use(bodyParser.json());

app.use('/calculate', bmiRoutes);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
}); 

app.get('/history', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'history.html'));
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
