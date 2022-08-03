import {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteFavorite, getFavoriteById } from "../../modules/favoriteManager";
import { Button, CardBody, Card } from "reactstrap";

export const FavoriteDelete = () => {
    const [favorite, setFavorite] = useState({});

    const navigate = useNavigate();
    const {id} = useParams();

    const getFavorite = () => {
        getFavoriteById(id)
        .then(favorite => setFavorite(favorite))
    };

    const handleClickDelete = () => {
        deleteFavorite(favorite.id)
        .then(navigate("/"))
    };

    useEffect(() => {
        getFavorite()
    }, []);

    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Card id="card" style={{ margin: '2em', width: 'fit-content', }}>
                <CardBody>
                    <h4>Are you sure you'd like to remove <b>{favorite.drinkName}</b> from favorites?</h4>
                    <Button onClick={() => navigate(`/favorite/details/${favorite.id}`)}>
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