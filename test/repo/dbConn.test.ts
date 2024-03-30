import {expect, test} from '@jest/globals';
import MysqlDatabase from '../../src/repo/dbConn';


test("", async ()=>{
    const db = MysqlDatabase.getInstance();
    const pool = db.createPool();
    const conn = await pool.getConnection();

    const ping = await conn.ping();

    expect(ping).toBe(true);
});