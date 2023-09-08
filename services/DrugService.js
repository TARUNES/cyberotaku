import { API_KEY,endpoint, } from "../config/DrugConfig";

export async function services() {
    let Drug = await fetch(`${endpoint}?search=openfda.brand_name:${search}&&limit=1`, {
        headers: {
            'X-API-KEY': API_KEY
        }
    });

    let result = await Drug.json();
    Drug = null;

    return result.Drug;
}