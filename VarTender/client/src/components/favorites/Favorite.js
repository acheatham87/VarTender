import React from "react";
import {Button, Card, CardBody} from "reactstrap";
import { Link } from "react-router-dom";
import "./Favorite.css"

export const Favorite = ({favorite}) => {
    
    return(
        <Card>
            <Link to={`/favorite/details/${favorite.id}`}>
            <CardBody>
                <img src={`${favorite.drinkImage}`} style={{
      width: 200,
    }}/>
                <h6>{`${favorite.drinkName}`}</h6>
            </CardBody>
            </Link>
        </Card>
    )
}