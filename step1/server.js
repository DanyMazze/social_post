const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const {readFileSync,writeFileSync,appendFileSync}=require('fs');

app.use(express.json());

app.use(express.static('public'));

app.post('/api/dato', (req, res) => {
    const dato = req.body.dato1;
    console.log('Dato ricevuto:', dato);
    
    writeFileSync('dati.json', JSON.stringify({ dato: dato }, null, 2));
    
    res.json({ success: true, dato: dato });
});

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});

