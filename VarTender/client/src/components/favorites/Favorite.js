import React from "react";
import {Button, Card, CardBody, CardImg} from "reactstrap";
import { Link } from "react-router-dom";

export const Favorite = ({favorite}) => {
    
    return(
        <Card id="card" style={{ width: '18rem', margin: `2rem`, textAlign: 'center' }}>
            <Link to={`/favorite/details/${favorite.id}`}>
            <CardBody>
                <CardImg src={`${favorite.drinkImage}`} style={{
      width: 200,
    }}/>
                <h4>{`${favorite.drinkName}`}</h4>
            </CardBody>
            </Link>
        </Card>
    )
}