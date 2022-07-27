import { useEffect, useState } from "react";
import { getAllUserIngredients } from "../../modules/userIngredientManager";
import { UserIngredient } from "./UserIngredient";
import { Button } from "reactstrap";
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
        <h3>Your Current Ingredients</h3>
        <div className="userIngredientContainer">
        {userIngredients.map((userIngredient) => (
            <UserIngredient userIngredient={userIngredient} key={userIngredient.id} />
            ))}
            <Button color="success" onClick={() => navigate(`/ingredient`)}>Add</Button>
           </div>
        </>
    )
}