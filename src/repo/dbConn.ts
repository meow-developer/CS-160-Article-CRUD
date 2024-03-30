import mysql from 'mysql2/promise';
import 'dotenv/config'
import { DbConnException } from './exception/dbConnException.js';

/**
 * MySQL database class to manage database connections
 * @class
 * @example
 * const mysqlDatabase = MysqlDatabase.getInstance();
 * const pool = mysqlDatabase.getPool();
 * const connection = await pool.getConnection();
 * const [rows] = await connection.query('SELECT 1');
 * connection.release(); //Release the connection back to the pool
 */
export default class MysqlDatabase {
    private static instance: MysqlDatabase;

    private mysqlHost: string = '';
    private mysqlDb: string = '';
    private mysqlUser: string = '';
    private mysqlPassword: string = '';
    private dbPool: mysql.Pool;

    /**
     * Singleton class to manage MySQL database connections
     * @constructor
     * @returns {MysqlDatabase}
     */
    private constructor() {
        this.loadEnvDatabaseConfig();
        this.dbPool = this.createPool();
    }

    /**
     * Get the singleton instance of the MysqlDatabase class
     * @returns {MysqlDatabase} The singleton instance of the MysqlDatabase class
     */
    public static getInstance(): MysqlDatabase {
        if (!MysqlDatabase.instance) {
            MysqlDatabase.instance = new MysqlDatabase();
        }
        return MysqlDatabase.instance;
    }
    
    /**
     * Create a new database connection pool
     * @returns {mysql.Pool} A new database connection pool
     */
    private createPool(): mysql.Pool {
        const pool = mysql.createPool({
            host: this.mysqlHost,
            user: this.mysqlUser,
            password: this.mysqlPassword,
            database: this.mysqlDb,
            waitForConnections: true,
            /**
             * Set the available connection limit to 6
             * Each connection should be reserved by an database operation for Article CRUD
             */
            connectionLimit: 6,
            queueLimit: 0,
            ssl: {
                rejectUnauthorized: false
            }
        });
        return pool;
    }

    /**
     * Test the database connection
     * @async
     * @returns {Promise<boolean>} True if the database connection is available, false otherwise
     */
    public async testPoolConnection(): Promise<boolean> {
        try {
            const connection = await this.dbPool.getConnection();
            await connection.ping();

            connection.release();

            console.log('Database connection is available');
            return true;

        } catch (error) {
            console.error('Error occurred while testing database connection\n', error);
            return false;
        }
    }
    /**
     * Load database configuration from environment variables
     * @private
     * @throws {DbExceptions} If any of the required environment variables are missing
     */
    private loadEnvDatabaseConfig(): void {
        const MYSQL_HOST_ENV_KEY = 'MYSQL_HOST';
        const MYSQL_DB_ENV_KEY = 'MYSQL_DB';
        const MYSQL_USER_ENV_KEY = 'MYSQL_USER';
        const MYSQL_PASSWORD_ENV_KEY = 'MYSQL_PASSWORD';

        if (!process.env[MYSQL_HOST_ENV_KEY] || !process.env[MYSQL_USER_ENV_KEY] || 
            !process.env[MYSQL_PASSWORD_ENV_KEY] || !process.env[MYSQL_DB_ENV_KEY]) {
            throw new DbConnException('Missing database environment variables');
        }

        this.mysqlHost = process.env[MYSQL_HOST_ENV_KEY];
        this.mysqlDb = process.env[MYSQL_DB_ENV_KEY];
        this.mysqlUser = process.env[MYSQL_USER_ENV_KEY];
        this.mysqlPassword = process.env[MYSQL_PASSWORD_ENV_KEY];
    }
    public getPool(): mysql.Pool {
        return this.dbPool;
    }
}