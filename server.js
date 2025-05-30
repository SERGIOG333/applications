import express from 'express';
import cors from 'cors';
import uploadRouter from './routers/upload.router.js';
import app from './app/app.js';
import dotend from 'dotenv';

dotend.config();
const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});








