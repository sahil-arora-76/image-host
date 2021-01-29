import express from 'express'; 
const router = express.Router();
router.get('/', (req: express.Request, res: express.Response ) => {
    res.send('a simple to use shareX server');
});

export default router;