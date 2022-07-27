import "firebase/auth";
import {getToken} from "./authManager";

const baseUrl = '/api/Ingredient';

export const getAllIngredients = () => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("An unknown error occured while trying to get your userIngredients",)
            }
        })
    })
}