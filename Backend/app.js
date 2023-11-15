// const express = require('express');
import express from 'express';
import { userRoutes } from './routes/user-routes.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());
app.use('/', userRoutes);
// Last middleware (404)
app.use((request, response, next) => {
    response.json({message:'Invalid URL'});
})

const server = app.listen(3001, (err) => {
    if (err) {
        console.log('Server Crash', err);
    }
    else {
        console.log('Server Up and Running', server.address().port);
    }
})