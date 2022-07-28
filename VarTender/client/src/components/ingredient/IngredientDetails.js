import {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, Button } from "reactstrap";
import { getDetailsByName } from "../../modules/eIngredientDetailsManager";

export const IngredientDetails = () => {
    const [details, setDetails] = useState ({
        strIngredient: '',
        strDescription: ''
    })

    const navigate = useNavigate();
    const {id} = useParams();

    const getDetails = () => {
        getDetailsByName(id)
        .then(res => setDetails(res.ingredients[0]))
    }

    useEffect(() => {
        getDetails()
    }, []);

    return(
        <Card className="card">
            <CardBody className="cardBody">
                <h2>{`${details.strIngredient}`}</h2>
                {details.strDescription != null ? <h4>{`${details.strDescription}`}</h4> : <h4>No details in the database</h4>}
                <Button color="secondary" onClick={() => navigate(`/ingredient`)}>Return</Button>
            </CardBody>
        </Card>
    )

}