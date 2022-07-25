import "firebase/auth";
import {getToken} from "./authManager";

const baseUrl = '/api/FavoritedDrink';

export const getAllFavorites = () => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/AllByFirebase`, {
            method:"GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("An unknows error occurred while tyring to get your favorites",)
            }
        })
    })
}

export const getFavoriteById = (id) => {
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
                    "An unknown error occurred while trying to get posts."
                )
            }
        })
    })
}

export const deleteFavorite = (id) => {
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
                throw new Error("An unknown error occurred while trying to delete category.")
            }
        })
    })
}
