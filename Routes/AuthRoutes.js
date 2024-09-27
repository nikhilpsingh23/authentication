const { signup, login } = require('../Controllers/AuthController');
const { SignupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const routes =require('express').Router();
require("../Controllers/AuthController");
require("../Middlewares/AuthValidation");

routes.post("/login",loginValidation,login);
routes.post("/signup",SignupValidation,signup);

module.exports= routes ;