import { getOsEnv } from "./service/lib/utils";
import * as dotenv from 'dotenv'

dotenv.config();

export const baseApp = {
    PORT: getOsEnv('PORT'),
    ORMTYPE: getOsEnv('TYPE'),
    MONGO_URI: getOsEnv('MONGO_URI')
}