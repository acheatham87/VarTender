const baseUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=";

export const getCocktailsByIngredient = (id) => {
    return fetch(`${baseUrl}${id}`)
    .then((res) => {
        if (res.ok) {
            return res.json()
        } 
        else
        {
            throw new Error(
                "An unknown error occurred while trying to get cocktails."
            )
        }
    })
}