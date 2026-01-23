import express from 'express';
import { pool } from './db.js';

const app = express();
app.use(express.json());
const PORT = 3000;



app.get('/', (req, res) =>{
    res.send('Hello from your express app!');
});

app.post('/add', (req, res) => {
    const {fnum, snum } = req.body;
    const sum = fnum+snum;
    res.status(201).json({ success:true, sum: sum});
});

app.post('/subtract', (req, res) => {
    const {fnum, snum } = req.body;
    const difference = fnum - snum;
    res.status(201).json({ success:true, difference: difference});
});

app.post('/multiply', (req, res) => {
    const {fnum, snum } = req.body;
    const product = fnum * fnum;
    res.status(201).json({ success:true, product: product});
});

app.post('/divide', (req, res) => {
    const {fnum, snum } = req.body;
    const quotient = fnum / fnum;
    res.status(201).json({ success:true, quotient: quotient});
});

app.listen(PORT, () => {
    console.log('Server listening on port $ {PORT}');
});
