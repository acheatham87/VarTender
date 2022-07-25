import { useEffect, useState } from "react";
import { getAllFavorites } from "../../modules/favoriteManager";
import { Favorite } from "./Favorite";

export const FavoriteList = () => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        getAllFavorites()
        .then(res => setFavorites(res))
    }, []);

    return (
        <>
        <h3>Your Favorite Drinks</h3>
        <div className="favContainer">
        {favorites.map((favorite) => (
            <Favorite favorite={favorite} key={favorite.id} />
        ))}
        </div>
        </>
    )
}