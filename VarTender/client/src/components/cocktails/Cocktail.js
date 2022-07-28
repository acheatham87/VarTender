import React from "react";
import {Button, Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";
import "./Cocktail.css";

export const Cocktail = ({cocktail}) => {
    
    return(
        <Card className="card">
            <Link to={`/cocktail/details/${cocktail.idDrink}`}>
            <CardBody className="cardBody">
                <img src={`${cocktail.strDrinkThumb}`} style={{
      width: 200,
    }}/>
                <h4>{`${cocktail.strDrink}`}</h4>        
            </CardBody>
            </Link>
        </Card>
    )
}