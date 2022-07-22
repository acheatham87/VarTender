using System.Collections.Generic;
using VarTender.Models;

namespace VarTender.Repositories
{
    public interface IUserIngredientRepository
    {
        void Add(UserIngredient userIngredient);

        void Delete(int id);

        List<UserIngredient> GetAllUserIngredientsByUserId(int id);

        public UserIngredient GetUserIngredientById(int id);
    }
}
