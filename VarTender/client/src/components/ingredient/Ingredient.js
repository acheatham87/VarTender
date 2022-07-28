import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, FormGroup, Label, Input} from "reactstrap";
import "./Ingredient.css";

export const Ingredient = ({ingredient, handleChange}) => {
    
    return(
        <Card className="card">
            <CardBody className="cardBody">
                <FormGroup check>
                    <Label check>
                        <Input 
                        className="form-check-input"
                        type="checkbox" 
                        name="selectedIngrediets"
                        value={ingredient.id} 
                        id="flexCheckDefault" 
                        onChange={handleChange}/>
                        {`${ingredient.name}`}
                        
                    </Label>
                </FormGroup>
                <Link to={`/ingredient/details/${ingredient.name}`}>
                    <h6>Details</h6>
                </Link>
            </CardBody>
        </Card>
    )
}