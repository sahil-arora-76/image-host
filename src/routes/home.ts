import express from 'express'; 
const router = express.Router();
router.get('/', (req: express.Request, res: express.Response ) => {
    res.send('a simple to use shareX server \n go to /image/upload to upload image \n /images/[name of image] to view that image');
});

export default router;