import express, { urlencoded } from 'express';
import bodyParser from 'body-parser';

const port = 5000;
const app = express();
const router = express.Router();

app.use(bodyParser.json());

const getUsers = (req, res, next) => {
    const body = req.body;
    const name = body.name;
    const code = body.code;

    res.json({ name, code });
};

router.post('/students', (req, res) => {
    const body = req.body;
    const name = body.name;
    const code = body.code;

    res.send('Creating student details');
    res.json({ name, code });
});

router.get('/students/:id', (req, res) => {
    res.send('Getting student details');
});

router.delete('/students/:id', (req, res) => {
    res.send(`Deleting student details of student with id ${req.params.id}`);
});

router.put('/', (req, res) => {
    res.send(`Updating student with id ${req.params.id}`);
});

app.use(router);

app.listen(port, function () {
    console.log(`The app us running from ${port}`);
});
