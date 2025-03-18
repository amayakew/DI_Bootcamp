import {Router} from 'express';
export const router = Router();

router.get('/',(req,res) => {
    res.send('Homepage');
});
router.get('/about',(req,res) => {
    res.send('About Us Page');
});