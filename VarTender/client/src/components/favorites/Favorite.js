import React from "react";
import {Button, Card, CardBody} from "reactstrap";
import {useNavigate} from "react-router-dom";

export const Favorite = ({favorite}) => {
    const navigate = useNavigate();
    
    return(
        <Card>
            <CardBody>
                <img src={`${favorite.drinkImage}`} style={{
      width: 200,
    }}/>
                <h6>{`${favorite.drinkName}`}</h6>
                <Button color="danger" onClick={() => navigate(`/FavoritedDrink/delete/${favorite.id}`)}>Remove Favorite</Button>
            </CardBody>
        </Card>
    )
}