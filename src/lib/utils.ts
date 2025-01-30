export function getOsEnv(key: string): string{
    console.log(key)
    if(typeof process.env[key] === 'undefined'){
        throw new Error(`Environment varaibale ${key} is not set`);
    }
    return process.env[key] as string;
}