import React from "react";
import { Card, CardBody, CardImg } from "reactstrap";
import {Link} from "react-router-dom";

export const CreatedCocktail = ({cocktail}) => {
    
    return(
        <Card id="card" style={{ width: '18rem', margin: `2rem`, textAlign: 'center' }}>
            <Link to={`/create/details/${cocktail.idDrink}`}>
            <CardBody>
                <CardImg src={`${cocktail.strDrinkThumb}`} style={{ width: 200 }}/>
                <h4>{`${cocktail.strDrink}`}</h4>        
            </CardBody>
            </Link>
        </Card>
    )
}