import { Router } from "express";

const router = Router();

router.get('/hello', (req,res) => {
    res.send('Hello From Express');
});

router.post('/world', (req, res) => {
    const {input} = req.body;
    console.log(req.body);
    res.send(`This is what you sent me: ${input}`);
});

export default router;