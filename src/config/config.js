import dotenv from 'dotenv';
dotenv.config({path:".env"});

export const PORT = process.env.PORT;
export const NODE = process.env.NODE;
export const DB_USER = process.env.DB_USER;
export const DB_USER_PASSWORD = process.env.DB_USER_PASSWORD;
export const DB_HOST = process.env.DB_HOST;
export const DB = process.env.DB;
export const DB_PORT = process.env.DB_PORT;


