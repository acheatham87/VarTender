import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, FormGroup, Label, Input} from "reactstrap";

export const Ingredient = ({ingredient, handleChange}) => {
    
    return(
        <Card id="card" style={{ width: '12rem', margin: `1rem`, textAlign: 'center' }}>
            <CardBody>
                <FormGroup check>
                    <Label check>
                        <Input 
                        className="form-check-input"
                        type="checkbox" 
                        name="selectedIngrediets"
                        value={ingredient.id} 
                        id="flexCheckDefault" 
                        onChange={handleChange}/>
                        <Link to={`/ingredient/details/${ingredient.name}`}>
                            <h6>{`${ingredient.name}`}</h6>
                        </Link>                        
                    </Label>
                </FormGroup>
            </CardBody>
        </Card>
    )
}