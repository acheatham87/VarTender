import { useEffect, useState } from "react";
import { getCocktailsByIngredient } from "../../modules/eCreateManager";
import { CreatedCocktail } from "./CreateCocktailCard";
import { Row, Card, CardBody, Button } from "reactstrap";

export const CreatedCocktailList = ({ingredient, ingredient2, ingredient3, ingredient4, startOver}) => {

    const [cocktails, setCocktails] = useState([]);

    var ingredientQueryString = ""
    if (ingredient != "Your Ingredients") {
        ingredientQueryString += ingredient
    }
    if (ingredient2 != "Your Ingredients") {
        ingredientQueryString += "," + ingredient2 
    }
    if (ingredient3 != "Your Ingredients") {
        ingredientQueryString += "," + ingredient3
    }
    if (ingredient4 != "Your Ingredients") {
        ingredientQueryString += "," + ingredient4
    }

    useEffect(() => {
        getCocktailsByIngredient(ingredientQueryString)
        .then(res => setCocktails(res.drinks))
    }, [ingredientQueryString]);

    if (cocktails == "None Found" && ingredientQueryString != "")
    {
        return (
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '8em' }}>
                <Card id="card" style={{ width: '18rem', margin: `2rem`, textAlign: 'center', cursor: 'pointer' }}>
                    <CardBody onClick={() => startOver()}>
                        <h1 style={{ color: 'white' }}>No Matches Found</h1>                         
                    </CardBody>
                </Card>
            </div>
        )
    }

    if (cocktails == "None Found")
    {
        return null
    }


    return (
        <>
        <h3 style={{ color: 'white' }}>Suggested Cocktails</h3>
        <div className="cocktailContainer">
            <Row style={{ justifyContent: 'center' }}>
                {cocktails.map((cocktail) => (
                    <CreatedCocktail cocktail={cocktail} key={cocktail.idDrink} />
                ))}
            </Row>
        </div>
        </>
    )
}