// const baseUrl = "www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i="

// export const getFavoriteDetailsById = (id) => {
//     return fetch(`${baseUrl}/${id}`
//         .then((res) => {
//             if (res.ok) {
//                 return res.json()
//             } else {
//                 throw new Error(
//                     "An unknown error occurred while trying to get details."
//                 );
//             }
//         })
//     )
// }