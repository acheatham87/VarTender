import { useEffect, useState } from "react";
import { getAllFavorites } from "../../modules/favoriteManager";
import { Favorite } from "./Favorite";
import { Row } from "reactstrap";

export const FavoriteList = () => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        getAllFavorites()
        .then(res => setFavorites(res))
    }, []);

    return (
        <>
        <h3 style={{ color: 'white' }}>Your Favorite Cocktails</h3>
        <div className="favContainer">
            <Row style={{ justifyContent: 'center' }}>
                {favorites.map((favorite) => (
                    <Favorite favorite={favorite} key={favorite.id} />
                ))}
            </Row>
        </div>
        </>
    )
}