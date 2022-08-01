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
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Card id="card" style={{ margin: '2em', width: 'fit-content', }}> 
                <CardBody>
                    <h2>{`${details.strIngredient}`}</h2>
                    {details.strDescription != null ? <h6>{`${details.strDescription}`}</h6> : <h6>No details in the database</h6>}
                    <Button color="secondary" onClick={() => navigate(`/ingredient`)}>Return</Button>
                </CardBody>
            </Card>
        </div>
    )

}