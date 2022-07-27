import {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteFavorite, getFavoriteById } from "../../modules/favoriteManager";
import { Button, Form, FormGroup, Label } from "reactstrap";

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
        <Form>
            <FormGroup>
                <Label>Are you sure you'd like to remove <b>{favorite.drinkName}</b> from favorites?
                </Label>
            </FormGroup>
            <FormGroup>
                <Button color="danger" onClick={() => handleClickDelete()}>
                    Remove
                </Button>
                <Button onClick={() => navigate(`/favorite/details/${favorite.id}`)}>
                    Cancel
                </Button>
            </FormGroup>
        </Form>
    )
}