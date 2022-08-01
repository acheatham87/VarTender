import { useEffect, useState } from "react";
import { getAllUserIngredients } from "../../modules/userIngredientManager";
import { UserIngredient } from "./UserIngredient";
import { Button, Row } from "reactstrap";
import {useNavigate} from  "react-router-dom";

export const UserIngredientList = () => {

    const [userIngredients, setUserIngredients] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllUserIngredients()
        .then(res => setUserIngredients(res))
    }, []);

    return (
        <>
        <h3 style={{ color: 'white' }}>Your Current Ingredients</h3>
        <div className="userIngredientContainer">
        <Row style={{ justifyContent: 'center' }}>
        {userIngredients.map((userIngredient) => (
            <UserIngredient userIngredient={userIngredient} key={userIngredient.id} />
            ))}
        </Row>
            <Button color="success" onClick={() => navigate(`/ingredient`)}>Add</Button>
           </div>
        </>
    )
}