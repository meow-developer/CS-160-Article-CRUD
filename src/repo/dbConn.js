import mysql from 'mysql2/promise';
import 'dotenv/config'
import { DbExceptions } from './exception/dbConnException';

/**
 * MySQL database class to manage database connections
 * @class
 * @example
 * const mysqlDatabase = new MysqlDatabase();
 * const pool = await mysqlDatabase.createPool();
 * const connection = await pool.getConnection();
 * const [rows] = await connection.query('SELECT 1');
 * console.log(rows);
 * connection.release(); //Release the connection back to the pool
 */
export default class MysqlDatabase {
    static instance;

    #mysqlHost;
    #mysqlDb;
    #mysqlUser;
    #mysqlPassword;
    #dbPool;

    /**
     * Singleton class to manage MySQL database connections
     * @constructor
     * @returns {MysqlDatabase}
     */
    constructor() {
        if (MysqlDatabase.instance) {
            return MysqlDatabase.instance;
        }

        MysqlDatabase.instance = this;

        this.#loadEnvDatabaseConfig();

        return this;
    }
    
    /**
     * Create a new database connection pool
     * @async
     * @returns {Promise<Pool>} A new database connection pool
     * @example
     * const mysqlDatabase = new MysqlDatabase();
     * const pool = await mysqlDatabase.createPool();
     * const connection = await pool.getConnection();
     * const [rows] = await connection.query('SELECT 1');
     * console.log(rows);
     * connection.release(); //Release the connection back to the pool
     */
    async createPool() {
        this.#dbPool = await mysql.createPool({
            host: this.#mysqlHost,
            user: this.#mysqlUser,
            password: this.#mysqlPassword,
            database: this.#mysqlDb,
            waitForConnections: true,
            /**
             * Set the available connection limit to 6
             * Each connection should be reserved by an database operation for Article CRUD
             */
            connectionLimit: 6,
            queueLimit: 0
        });
        return this.#dbPool;
    }

    /**
     * Test the database connection
     * @async
     * @returns {Promise<boolean>} True if the database connection is available, false otherwise
     */
    async testPoolConnection() {
        try {
            const connection = await pool.getConnection();
            const isDbReturnPing = await connection.ping();

            connection.release();

            if (isDbReturnPing) {
                console.log('Database connection is available');
                return true;
            } else {
                console.log('Database connection is not available. Ping failed.');
                return false;
            }

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
    #loadEnvDatabaseConfig() {
        const MYSQL_HOST_ENV_KEY = 'MYSQL_HOST';
        const MYSQL_DB_ENV_KEY = 'MYSQL_DB';
        const MYSQL_USER_ENV_KEY = 'MYSQL_USER';
        const MYSQL_PASSWORD_ENV_KEY = 'MYSQL_PASSWORD';

        if (!process.env[MYSQL_HOST_ENV_KEY] || !process.env[MYSQL_USER_ENV_KEY] || 
            !process.env[MYSQL_PASSWORD_ENV_KEY] || !process.env[MYSQL_DB_ENV_KEY]) {
            throw new DbExceptions('Missing database environment variables');
        }

        this.#mysqlHost = process.env[MYSQL_HOST_ENV_KEY];
        this.#mysqlDb = process.env[MYSQL_DB_ENV_KEY];
        this.#mysqlUser = process.env[MYSQL_USER_ENV_KEY];
        this.#mysqlPassword = process.env[MYSQL_PASSWORD_ENV_KEY];
    }
    
}