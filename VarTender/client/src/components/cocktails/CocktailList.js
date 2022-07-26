import { useEffect, useState } from "react";
import { getRandomCocktails } from "../../modules/eCocktailManager";
import { Cocktail } from "./Cocktail";

export const CocktailList = () => {

    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        getRandomCocktails()
        .then(res => setCocktails(res.drinks))
    }, []);

    return (
        <>
        <h3>Cocktails</h3>
        <div className="cocktailContainer">
        {cocktails.map((cocktail) => (
            <Cocktail cocktail={cocktail} key={cocktail.idDrink} />
        ))}
        </div>
        </>
    )
}