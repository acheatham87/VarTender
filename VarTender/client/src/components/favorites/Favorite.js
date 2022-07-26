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
                <Button color="info" onClick={() => navigate(`/favorite/details/${favorite.id}`)}>Details</Button>
            </CardBody>
        </Card>
    )
}