const baseUrl ="https://www.thecocktaildb.com/api/json/v2/9973533/search.php?i="

export const getDetailsByName = (name) => {
    return fetch(`${baseUrl}${name}`)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error(
                    "An unknown error occurred while trying to get details."
                );
            }
        })
    
}