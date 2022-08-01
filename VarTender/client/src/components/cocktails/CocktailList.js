import { useEffect, useState } from "react";
import { getRandomCocktails } from "../../modules/eRandomCocktailManager";
import { Cocktail } from "./Cocktail";
import { Row } from "reactstrap";

export const CocktailList = () => {

    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        getRandomCocktails()
        .then(res => setCocktails(res.drinks))
    }, []);

    return (
        <>
        <h3 style={{ color: 'white' }}>Cocktails</h3>
        <div className="cocktailContainer">
            <Row style={{ justifyContent: 'center' }}>
                {cocktails.map((cocktail) => (
                    <Cocktail cocktail={cocktail} key={cocktail.idDrink} />
                ))}
            </Row>
        </div>
        </>
    )
}