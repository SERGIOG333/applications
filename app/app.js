import express from 'express';
import cors from 'cors';
import uploadRouter from '../routers/upload.router.js';
import salaryRouter from '../routers/salary.router.js';
import testMysqlRouter from '../routers/testMysql.router.js';


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api_v1', uploadRouter);
app.use('/api_v1/salary', salaryRouter);
app.use('/api_v1/testMysql', testMysqlRouter);

app.use((req, res, next) => {
    res.status(404).json({ 
        message: 'Endpoint losses'
     });
});

export default app;





