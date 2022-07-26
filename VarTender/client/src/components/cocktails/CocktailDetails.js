import {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailsById } from "../../modules/eDetailsManager";
import { Card, CardBody, Button } from "reactstrap";

export const CocktailDetails = () => {
    const [details, setDetails] = useState({});

    const navigate = useNavigate();
    const {idDrink} = useParams();

    const getDetails = () => {
        getDetailsById(idDrink)
        .then(res => {
            console.log(res)
            setDetails(res.drinks[0])
        })
    }

    useEffect(() => {
        getDetails()
    }, []);

    return(
        <Card>
            <CardBody>
                <img src={`${details.strDrinkThumb}`} style={{
      width: 200,
    }}/>
                <h2>{`${details.strDrink}`}</h2>
                {details.strIngredient1 !== null ? <h6>{`${details.strIngredient1}, ${details.strMeasure1}`}</h6> : ""}
                {details.strIngredient2 !== null ? <h6>{`${details.strIngredient2}, ${details.strMeasure2}`}</h6> : ""}
                {details.strIngredient3 !== null ? <h6>{`${details.strIngredient3}, ${details.strMeasure3}`}</h6> : ""}
                {details.strIngredient4 !== null ? <h6>{`${details.strIngredient4}, ${details.strMeasure4}`}</h6> : ""}
                {details.strIngredient5 !== null ? <h6>{`${details.strIngredient5}, ${details.strMeasure5}`}</h6> : ""}
                {details.strIngredient6 !== null ? <h6>{`${details.strIngredient6}, ${details.strMeasure6}`}</h6> : ""}
                {details.strIngredient7 !== null ? <h6>{`${details.strIngredient7}, ${details.strMeasure7}`}</h6> : ""}
                {details.strIngredient8 !== null ? <h6>{`${details.strIngredient8}, ${details.strMeasure8}`}</h6> : ""}
                {details.strIngredient9 !== null ? <h6>{`${details.strIngredient9}, ${details.strMeasure9}`}</h6> : ""}
                {details.strIngredient10 !== null ? <h6>{`${details.strIngredient10}, ${details.strMeasure10}`}</h6> : ""}
                {details.strIngredient11 !== null ? <h6>{`${details.strIngredient11}, ${details.strMeasure11}`}</h6> : ""}
                {details.strIngredient12 !== null ? <h6>{`${details.strIngredient12}, ${details.strMeasure12}`}</h6> : ""}
                {details.strIngredient13 !== null ? <h6>{`${details.strIngredient13}, ${details.strMeasure13}`}</h6> : ""}
                {details.strIngredient14 !== null ? <h6>{`${details.strIngredient14}, ${details.strMeasure14}`}</h6> : ""}
                {details.strIngredient15 !== null ? <h6>{`${details.strIngredient15}, ${details.strMeasure15}`}</h6> : ""}
                <h4>{`${details.strInstructions}`}</h4>

            <Button color="info" onClick={() => navigate(`/cocktail`)}>Return</Button>
            <Button color="success" onClick={() => navigate(`/cocktail`)}>Favorite</Button>
            </CardBody>
        </Card>
    )
}