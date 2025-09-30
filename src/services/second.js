import { httpAxios } from "@/helper/httphelper";

export async function second(secondData) {
    try {
        const result = await httpAxios.post("/api/second", secondData).then((response) => response.data);
        return result;
    } catch (error) {
        console.log(error.message);
    }
}