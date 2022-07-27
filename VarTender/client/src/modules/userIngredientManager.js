import "firebase/auth";
import {getToken} from "./authManager";

const baseUrl = '/api/UserIngredient';

export const getAllUserIngredients = () => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/AllByFirebase`, {
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

export const getUserIngredientById = (id) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error(
                    "An unknown error occurred while trying to get userIngredient."
                )
            }
        })
    })
}

export const deleteUserIngredient = (id) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body:JSON.stringify(id)
        }).then((res) => {
            if (res.ok) {

            }
            else if (res.status === 401) {
                throw new Error("Unauthorized")
            } else {
                throw new Error("An unknown error occurred while trying to delete userIngredient.")
            }
        })
    })
}

export const addUserIngredient = (userIngredient) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userIngredient),
        }).then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error(
                    "An unknown error occurred while trying to save your userIngredient.",
                )
            }
        })
    })
}