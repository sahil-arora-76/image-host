import express from 'express'; 
import multer from 'multer';
import path from 'path';
const app = express();
import homeRoute from './routes/home';
import uploadRoute from './routes/upload';
const storage  =  multer.diskStorage({
    destination(req, file, cb)  {
        cb(null, '../uploads');
    }, 
    filename(req, file, cb) { 
        cb(null,  file.originalname );
    }
}); 
const fileFilter = (req: express.Request, file: any, cb: multer.FileFilterCallback) => {
    console.log(file.mimetype);
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif' || file.mimetype === 'image/jpeg') { 
        cb(null, true);
    } else {
        cb(null, false);
    }
}
app.use('/images', express.static(path.join(__dirname, '..', 'uploads')))
app.use(multer({storage: storage, fileFilter: fileFilter}).single('image'));
app.use('/image', uploadRoute);
app.use('/', homeRoute);

app.listen(4000 , () => { 
    process.stdout.write('App Listening to 3000 port\n');
});