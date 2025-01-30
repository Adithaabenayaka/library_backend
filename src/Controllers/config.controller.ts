import { Request, Response } from "express";

class ConfigController{

    getBooks(req:Request, res: Response){
        res.json({message:"Get all Books"})
    }
}

export default ConfigController