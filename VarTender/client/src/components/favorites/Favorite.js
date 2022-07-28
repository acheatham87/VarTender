import React from "react";
import {Button, Card, CardBody} from "reactstrap";
import { Link } from "react-router-dom";
import "./Favorite.css"

export const Favorite = ({favorite}) => {
    
    return(
        <Card className="card">
            <Link to={`/favorite/details/${favorite.id}`}>
            <CardBody className="cardBody">
                <img src={`${favorite.drinkImage}`} style={{
      width: 200,
    }}/>
                <h4>{`${favorite.drinkName}`}</h4>
            </CardBody>
            </Link>
        </Card>
    )
}