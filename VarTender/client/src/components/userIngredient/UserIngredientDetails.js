import {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, Button } from "reactstrap";
import { getDetailsByName } from "../../modules/eIngredientDetailsManager";
import { getUserIngredientById } from "../../modules/userIngredientManager";

export const UserIngredientDetails = () => {
    const [userIngredient, setUserIngredient] = useState({})
    const [details, setDetails] = useState ({
        strIngredient: '',
        strDescription: ''
    })

    const navigate = useNavigate();
    const {id} = useParams();

    const getUserIngredient = () => {
        getUserIngredientById(id)
        .then(ui => {
            getDetailsByName(ui.ingredient.name)
            .then(res => {
                setDetails(res.ingredients[0])
                setUserIngredient(ui)
            })
        })
    }

    useEffect(() => {
        getUserIngredient()
    }, []);

    return(
        <Card>
            <CardBody>
                <h2>{`${details.strIngredient}`}</h2>
                {details.strDescription != null ? <h4>{`${details.strDescription}`}</h4> : <h4>No details in the database</h4>}
                <Button color="secondary" onClick={() => navigate(`/myBar`)}>Return</Button>
                <Button color="danger" onClick={() => navigate(`/myBar/delete/${id}`, {state: {ingredientName: userIngredient.ingredient.name}})}>Remove</Button>
            </CardBody>
        </Card>
    )

}