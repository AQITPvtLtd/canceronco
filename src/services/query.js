import { httpAxios } from "@/helper/httphelper";

export async function query(queryData) {
    try {
        const result = await httpAxios.post("/api/query", queryData).then((response) => response.data);
        return result;
    } catch (error) {
        console.log(error.message);
    }
}