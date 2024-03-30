import MysqlDatabase from '../../src/repo/dbConn';

describe("MySQL Database connection", ()=>{
    const db = MysqlDatabase.getInstance();
    db.createPool();

    test("Ping Test", async ()=>{
        const ping = await db.testPoolConnection();

        expect(ping).toBe(true);
    });
});