import pool from "@/helper/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [results] = await pool.query(
      "SELECT * FROM treatments ORDER BY id ASC" // id wise order
    );

    return NextResponse.json({
      message: "success",
      success: true,
      result: results || [], // always return an array
    });
  } catch (error) {
    console.error("Database Error:", error.message);
    return NextResponse.json({
      message: error.message,
      success: false,
      result: [],
    });
  }
}
