import { useEffect, useState } from "react";
import React from "react";
import { getAllUserIngredients } from "../../modules/userIngredientManager";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Label } from 'reactstrap';
import { CreatedCocktailList } from "./CreateCocktailList";

export const CreateCocktail = () => {

    const [userIngredients, setUserIngredients] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const [dropdownOpen4, setDropdownOpen4] = useState(false);
    const [ingredient, setIngredient] = useState("Your Ingredients");
    const [ingredient2, setIngredient2] = useState("Your Ingredients");
    const [ingredient3, setIngredient3] = useState("Your Ingredients");
    const [ingredient4, setIngredient4] = useState("Your Ingredients");


    const toggle = () => {
        setDropdownOpen(prevState => !prevState);
    }

    const toggle2 = () => {
        setDropdownOpen2(prevState => !prevState);
    }

    const toggle3 = () => {
        setDropdownOpen3(prevState => !prevState);
    }

    const toggle4 = () => {
        setDropdownOpen4(prevState => !prevState);
    }

    const handleClick = (evt) => {
        let selectedVal = evt.target.value
        setIngredient(selectedVal)
        toggle()
    }

    const handleClick2 = (evt) => {
        let selectedVal = evt.target.value
        setIngredient2(selectedVal)
        toggle2()
    }

    const handleClick3 = (evt) => {
        let selectedVal = evt.target.value
        setIngredient3(selectedVal)
        toggle3()
    }

    const handleClick4 = (evt) => {
        let selectedVal = evt.target.value
        setIngredient4(selectedVal)
        toggle4()
    }

    const startOver = (evt) => {
        setIngredient("Your Ingredients")
        setIngredient2("Your Ingredients")
        setIngredient3("Your Ingredients")
        setIngredient4("Your Ingredients")
    }
    
    useEffect(() => {
        getAllUserIngredients()
        .then(res => setUserIngredients(res))
    }, [])

    return (
        <div>
            <div>    
                <h3 onClick={() => startOver()} style={{color: "white", marginBottom: "2em", cursor: 'pointer'}}>Create Your Cocktail</h3>  
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div style={{marginBottom: "2em"}}>
                    <Dropdown onClick={handleClick} isOpen={dropdownOpen}>
                        <Label style={{ color: 'white', fontSize: '1.5rem' }}>Starting Ingredient</Label> <br/> 
                        <DropdownToggle onMouseEnter={toggle} disabled={ingredient != "Your Ingredients"}>
                        {ingredient}
                        </DropdownToggle>
                        <DropdownMenu style={{ maxHeight: "50vh", overflow: "scroll" }}>
                            {userIngredients.map(ui => (
                                <DropdownItem key={ui.id} value={ui.ingredient.name}>
                                    {ui.ingredient.name}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </div>  
                <div style={{marginLeft: "4em"}}>
                    <Dropdown onClick={handleClick2} isOpen={dropdownOpen2}>
                        <Label style={{ color: 'white', fontSize: '1.5rem' }}>Add Ingredient</Label> <br/>
                        <DropdownToggle onMouseEnter={toggle2} disabled={ingredient == "Your Ingredients" || ingredient2 != "Your Ingredients"}>
                            {ingredient2}
                        </DropdownToggle>
                        <DropdownMenu style={{ maxHeight: "50vh", overflow: "scroll" }}>
                            {userIngredients.map(ui => (
                                <DropdownItem key={ui.id} value={ui.ingredient.name}>
                                    {ui.ingredient.name}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </div> 
                <div style={{marginLeft: "4em"}}>
                    <Dropdown onClick={handleClick3} isOpen={dropdownOpen3}>
                        <Label style={{ color: 'white', fontSize: '1.5rem' }}>Add Ingredient</Label> <br/>
                        <DropdownToggle onMouseEnter={toggle3} disabled={ingredient == "Your Ingredients" || ingredient2 == "Your Ingredients" || ingredient3 != "Your Ingredients"}>
                            {ingredient3}
                        </DropdownToggle>
                        <DropdownMenu style={{ maxHeight: "50vh", overflow: "scroll" }}>
                            {userIngredients.map(ui => (
                                <DropdownItem key={ui.id} value={ui.ingredient.name}>
                                    {ui.ingredient.name}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </div> 
                <div style={{marginLeft: "4em"}}>
                    <Dropdown onClick={handleClick4} isOpen={dropdownOpen4}>
                        <Label style={{ color: 'white', fontSize: '1.5rem' }}>Add Ingredient</Label> <br/>
                        <DropdownToggle onMouseEnter={toggle4} disabled={ingredient == "Your Ingredients" || ingredient2 == "Your Ingredients" || ingredient3 == "Your Ingredients" || ingredient4 != "Your Ingredients"}>
                            {ingredient4}
                        </DropdownToggle>
                        <DropdownMenu style={{ maxHeight: "50vh", overflow: "scroll" }}>
                            {userIngredients.map(ui => (
                                <DropdownItem key={ui.id} value={ui.ingredient.name}>
                                    {ui.ingredient.name}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </div> 
            </div>         
            <div>
                <CreatedCocktailList ingredient={ingredient} ingredient2={ingredient2} ingredient3={ingredient3} ingredient4={ingredient4} startOver={startOver}/>
            </div>
        </div>
    )
}

export default CreateCocktail;