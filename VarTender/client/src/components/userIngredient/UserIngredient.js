import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody} from "reactstrap";

export const UserIngredient = ({userIngredient}) => {
    
    return(
        <Card id="card" style={{ width: '12rem', margin: `1rem`, textAlign: 'center' }}>
            <Link to={`/myBar/ingredientDetails/${userIngredient.id}`}>
            <CardBody>
                <h6>{`${userIngredient.ingredient.name}`}</h6>
            </CardBody>
            </Link>
        </Card>
    )
}