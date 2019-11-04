const routes = require('express').Router();
const multer = require('multer');

const multerConfig = require('./config/multer');

const UploadController = require('./controllers/UploadController')

routes.post('/posts', multer(multerConfig).single('file'), UploadController.store);

module.exports = routes;