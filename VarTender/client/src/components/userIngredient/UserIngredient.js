import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody} from "reactstrap";
import "./UserIngredient.css";

export const UserIngredient = ({userIngredient}) => {
    
    return(
        <Card className="card">
            <Link to={`/myBar/ingredientDetails/${userIngredient.id}`}>
            <CardBody className="cardBody">
                <h4>{`${userIngredient.ingredient.name}`}</h4>
            </CardBody>
            </Link>
        </Card>
    )
}