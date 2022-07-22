using System.Collections.Generic;
using VarTender.Models;

namespace VarTender.Repositories
{
    public interface IFavoritedDrinkRepository
    {
        void Add(FavoritedDrink favoritedDrink);

        void Delete(int id);

        List<FavoritedDrink> GetAllFavoritesByUserId(int id);

        public FavoritedDrink GetFavoritedDrinkById(int id);
    }
}
