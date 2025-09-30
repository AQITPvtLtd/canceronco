import pool from "@/helper/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // ✅ Correct way to use promise-based pool
        const [results] = await pool.query("SELECT * FROM blog ORDER BY id DESC");

        return NextResponse.json({
            message: "success",
            success: true,
            result: results,
        });
    } catch (error) {
        console.error("Database Error:", error.message);
        return NextResponse.json({ message: error.message, success: false });
    }
}
