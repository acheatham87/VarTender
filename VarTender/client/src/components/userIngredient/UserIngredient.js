import React from "react";
import { Card, CardBody} from "reactstrap";

export const UserIngredient = ({userIngredient}) => {
    
    return(
        <Card>
            <CardBody>
                <h6>{`${userIngredient.ingredient.name}`}</h6>
            </CardBody>
        </Card>
    )
}