import express from 'express';
import cors from 'cors';
import uploadRouter from '../routers/upload.router.js';
import salaryRouter from '../routers/salary.router.js';
import testMysqlRouter from '../routers/testMysql.router.js';
import documentTypeRouter from '../routers/documentType.router.js';
import roleRouter from '../routers/role.router.js';
import userStatusRouter from '../routers/userStatus.router.js';
import userRouter from '../routers/user.router.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api_v1', uploadRouter);
app.use('/api_v1/salary', salaryRouter);
app.use('/api_v1/testMysql', testMysqlRouter);
app.use('/api_v1/documentType', documentTypeRouter);
app.use('/api_v1/role', roleRouter);
app.use('/api_v1/userStatus', userStatusRouter);
app.use('/api_v1/user', userRouter);


app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint losses'
    });
});

export default app;





