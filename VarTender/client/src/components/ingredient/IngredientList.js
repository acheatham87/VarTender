import { useEffect, useState } from "react";
import { getAllIngredients } from "../../modules/ingredientManager";
import { Ingredient } from "./Ingredient";
import {useNavigate} from "react-router-dom";
import { Button, Row } from "reactstrap";
import { addUserIngredient } from "../../modules/userIngredientManager";

export const IngredientList = () => {

    const [ingredients, setIngredients] = useState([]);
    const [userIngredient, setUserIngredient] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {value, checked} = e.target;
        if (checked) {
            setUserIngredient( userIngredient => [...userIngredient, value])
        } 
        else {
            setUserIngredient(userIngredient.filter((e) => e !== value))
        }
    }

    const handleAddIngredient = (evt) => {
        evt.preventDefault()
        const promises = []
        userIngredient.forEach(ui => {
            promises.push(addUserIngredient({ingredientId: ui}))
        })

        Promise.all(promises).then(() => navigate('/myBar'))
    }

    useEffect(() => {
        getAllIngredients()
        .then(res => setIngredients(res))
    }, []);

    return (
        <>
        <h3 style={{ color: 'white' }}>Available Ingredients</h3>
        <div className="ingredientContainer">
        <Row style={{ justifyContent: 'center' }}>
            {ingredients.map((ingredient) => (
                <Ingredient ingredient={ingredient} key={ingredient.id} handleChange={handleChange} />
            ))}
        </Row>
        <Button color="secondary" onClick={() => navigate(`/myBar`)}>Return</Button>
        <Button color="success" onClick={handleAddIngredient}>Add</Button>
        </div>
        </>
    )
}