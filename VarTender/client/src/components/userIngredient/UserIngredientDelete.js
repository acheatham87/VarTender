import {useState, useEffect} from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { deleteUserIngredient, getUserIngredientById } from "../../modules/userIngredientManager";
import { Button, Card, CardBody } from "reactstrap";

export const UserIngredientDelete = () => {
    const [userIngredient, setUserIngredient] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const {id} = useParams();

    const getUserIngredient = () => {
        getUserIngredientById(id)
        .then(res => setUserIngredient(res))
    };

    const handleClickDelete = () => {
        deleteUserIngredient(userIngredient.id)
        .then(navigate("/myBar"))
    };

    useEffect(() => {
        getUserIngredient()
    }, []);

    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Card id="card" style={{ margin: '2em', width: 'fit-content', }}>
                <CardBody>
                    <h4>Are you sure you'd like to remove <b>{location.state.ingredientName}</b> from favorites?</h4>
                    <Button onClick={() => navigate(`/myBar/ingredientDetails/${userIngredient.id}`)}>
                        Cancel
                    </Button>
                    <Button color="danger" onClick={() => handleClickDelete()}>
                        Remove
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}