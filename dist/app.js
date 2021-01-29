"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
//routes
const home_1 = __importDefault(require("./routes/home"));
const upload_1 = __importDefault(require("./routes/upload"));
const storage = multer_1.default.diskStorage({
    destination(req, file, cb) {
        cb(null, '../uploads');
    },
    filename(req, file, cb) {
        cb(null, file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    console.log(file.mimetype);
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
app.use('/images', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads')));
app.use(multer_1.default({ storage: storage, fileFilter: fileFilter }).single('image'));
app.use('/image', upload_1.default);
app.use('/', home_1.default);
app.listen(3000, () => {
    process.stdout.write('App Listening to 3000 port\n');
});
