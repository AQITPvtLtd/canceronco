import mysql from "mysql2";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "cancer_onco",
    waitForConnections: true,
    connectionLimit: 10,  // Kitne max connections ek time me allow hain
    queueLimit: 0,        // Queue limit, 0 means no limit
});

export default pool.promise();
