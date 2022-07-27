using System.Collections.Generic;
using VarTender.Models;

namespace VarTender.Repositories
{
    public interface IIngredientRepository
    {
        List<Ingredient> GetAllIngredients(int id);
    }
}
