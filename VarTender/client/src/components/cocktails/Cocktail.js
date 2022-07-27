import React from "react";
import {Button, Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";
import "./Cocktail.css";

export const Cocktail = ({cocktail}) => {
    
    return(
        <Card>
            <Link to={`/cocktail/details/${cocktail.idDrink}`}>
            <CardBody>
                <img src={`${cocktail.strDrinkThumb}`} style={{
      width: 200,
    }}/>
                <h6>{`${cocktail.strDrink}`}</h6>        
            </CardBody>
            </Link>
        </Card>
    )
}