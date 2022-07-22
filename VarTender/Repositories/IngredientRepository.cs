using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using VarTender.Models;
using VarTender.Utils;

namespace VarTender.Repositories
{
    public class IngredientRepository : BaseRepository, IIngredientRepository
    {

        public IngredientRepository(IConfiguration configuration) : base(configuration) { }

        public List<Ingredient> GetAllIngredients()
        {
            List<Ingredient> ingredients = new List<Ingredient>();
            {
                using (var conn = Connection)
                {
                    conn.Open();
                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"
                            SELECT Id, Name
                            FROM Ingredient
                            ORDER BY Name";

                        var reader = cmd.ExecuteReader();

                        while (reader.Read())
                        {
                            Ingredient ingredient = new Ingredient()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                            };

                            ingredients.Add(ingredient);
                        }

                        reader.Close();

                        return ingredients;
                    }
                }
            }
        }
    }
}
