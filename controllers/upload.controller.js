import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathImage = '../data/uploads';






const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, pathImage));
},
filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fielname + '-' + uniqueSuffix + path.extname(file.originalname));

}
});


const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('File type not allowed'), false);
    }

};



const upload = multer ({
    storage: storage,
    fileFilter: fileFilter,
    limits: { filesize: 5 * 1024 * 1024 } 
});

export const uploadFile = [
    upload.single('file'),
    (req, res)=>{
        try{
            if(!req.file){
                return res.status(400).json({message: 'No file uploaded'});
            }

            res.status(200).json({
                message: 'file oploaded sucessfully',
                file: req.file
                
            });
        } catch(error) {
            res.status(500).json({message:error.message});
        }
    }
];
