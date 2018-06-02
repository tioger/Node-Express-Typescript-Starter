import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import bodyParser from "body-parser";

import * as homeController from "./controllers/homeController";

// Init App
const app = express();

// Express Config
app.set("port",process.env.Port || 3000);
// View Engine
app.set("views", path.join(__dirname,"../views"));
app.set("view engine","ejs");
app.use(expressEjsLayouts);

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set static Folder
app.use("/public",express.static(path.join(__dirname,"public")));

app.get("/",homeController.index);

export default app;