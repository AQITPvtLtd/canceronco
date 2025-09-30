import { httpAxios } from "@/helper/httphelper";

export async function getBlog() {
    try {
        const response = await httpAxios.get("/api/get-blogs");
        return response.data;
    } catch (error) {
        console.error("Error fetching blogs:", error.message);
        throw error; // Error ko throw karna better hai taki calling function handle kar sake
    }
}
