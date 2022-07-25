// import {useState, useEffect} from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { getFavoriteById } from "../../modules/favoriteManager";
// import { getFavoriteDetailsById } from "../../modules/eFavoriteManager";
// import { Card, CardBody, Button } from "reactstrap";

// export const FavoriteDetails = () => {
//     const [favorite, setFavorite] = useState({
//         drinkId: 0,
//     });
//     const [details, setDetails] = useState({
//         strDrink: "",
//         strInstructions: "",
//         strDrinkThumb: "",
//         strIngredient1: "",
//         strIngredient2: "",
//         strIngredient3: "",
//         strIngredient4: "",
//         strIngredient5: "",
//         strIngredient6: "",
//         strIngredient7: "",
//         strIngredient8: "",
//         strIngredient9: "",
//         strIngredient10: "",
//         strIngredient11: "",
//         strIngredient12: "",
//         strIngredient13: "",
//         strIngredient14: "",
//         strIngredient15: "",
//         strMeasure1: "",
//         strMeasure2: "",
//         strMeasure3: "",
//         strMeasure4: "",
//         strMeasure5: "",
//         strMeasure6: "",
//         strMeasure7: "",
//         strMeasure8: "",
//         strMeasure9: "",
//         strMeasure10: "",
//         strMeasure11: "",
//         strMeasure12: "",
//         strMeasure13: "",
//         strMeasure14: "",
//         strMeasure15: "",
//     })

//     const navigate = useNavigate();
//     const {id} = useParams();

//     const getFavorite = () => {
//         getFavoriteById(id)
//         .then(favorite => setFavorite(favorite)
//             .then(getFavoriteDetailsById(favorite.drinkId)
//                 .then(details => setDetails(details))))
//     };

//     useEffect(() => {
//         getFavorite()
//     }, []);

//     return(
//         <Card>
//             <CardBody>
//                 <img src={`${details.strDrinkThumb}`} style={{
//       width: 200,
//     }}/>
//                 <h6>{`${details.strDrink}`}</h6>
//             </CardBody>
//             <Button color="info" onClick={() => navigate(`/`)}>Return</Button>
//         </Card>
//     )
// }