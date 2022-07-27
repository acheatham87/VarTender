import React from "react";
import { Card, CardBody, FormGroup, Label, Input} from "reactstrap";
import "./Ingredient.css";

export const Ingredient = ({ingredient, handleChange}) => {
    
    return(
        <Card>
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
                        {`${ingredient.name}`}
                        
                    </Label>
                </FormGroup>
            </CardBody>
        </Card>
    )
}