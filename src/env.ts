import { getOsEnv } from "./service/lib/utils";
import * as dotenv from 'dotenv'

dotenv.config();

export const baseApp = {
    PORT: getOsEnv('PORT'),
    MONGO_URI: getOsEnv('MONGO_URI'),
    JWT_SECRET_KEY: getOsEnv('JWT_SECRET_KEY')
}