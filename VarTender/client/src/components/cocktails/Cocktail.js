import React from "react";
import {Button, Card, CardBody} from "reactstrap";
import {useNavigate} from "react-router-dom";

export const Cocktail = ({cocktail}) => {
    const navigate = useNavigate();
    
    return(
        <Card>
            <CardBody>
                <img src={`${cocktail.strDrinkThumb}`} style={{
      width: 200,
    }}/>
                <h6>{`${cocktail.strDrink}`}</h6>
                <Button color="info" onClick={() => navigate(`/cocktail/details/${cocktail.idDrink}`)}>Details</Button>                
            </CardBody>
        </Card>
    )
}