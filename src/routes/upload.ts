import express from 'express';
import path from 'path'; 
const router = express.Router(); 

router.get('/upload', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, '..', '..',  'html', 'upload.html'));
});

router.post('/upload' , (req: express.Request, res: express.Response) => {
    let image = req.file; 
    if (image) { 
        return res.send('Saved'); 
    } else {
        return res.send('Error ');
    }
});

export default router;