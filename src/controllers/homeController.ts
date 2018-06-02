import {Request, Response, NextFunction} from "express";

/**
 * GET /
 * Home page.
 */
export let index = (req:Request,res:Response) => {
    res.render("index",{user:"CoolMan",page_name:"index"});
};