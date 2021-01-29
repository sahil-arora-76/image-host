"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
router.get('/upload', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', '..', 'html', 'upload.html'));
});
router.post('/upload', (req, res) => {
    let image = req.file;
    if (image) {
        return res.send('Saved');
    }
    else {
        return res.send('Error ');
    }
});
exports.default = router;
