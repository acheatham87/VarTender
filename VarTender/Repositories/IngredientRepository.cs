using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using VarTender.Models;
using VarTender.Utils;

namespace VarTender.Repositories
{
    public class IngredientRepository : BaseRepository, IIngredientRepository
    {

        public IngredientRepository(IConfiguration configuration) : base(configuration) { }

        public List<Ingredient> GetAllIngredients(int id)
        {
            List<Ingredient> ingredients = new List<Ingredient>();
            {
                using (var conn = Connection)
                {
                    conn.Open();
                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"
                            SELECT i.Id AS Id, Name
                            FROM Ingredient i
                            LEFT JOIN userIngredient ui ON i.Id = ui.IngredientId
                            WHERE ui.IngredientId IS NULL OR ui.UserProfileId != @Id
                            ORDER BY i.Name";

                        DbUtils.AddParameter(cmd, "@id", id);

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
