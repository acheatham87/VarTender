using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using VarTender.Models;
using VarTender.Utils;

namespace VarTender.Repositories
{
    public class FavoritedDrinkRepository : BaseRepository, IFavoritedDrinkRepository
    {
        public FavoritedDrinkRepository(IConfiguration configuration) : base(configuration) { }

        public void Add(FavoritedDrink favoritedDrink)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO FavoritedDrink (UserProfileId, DrinkId, DrinkName, DrinkImage)
                        OUTPUT INSERTED.ID
                        VALUES (@UserProfileId, @DrinkId, @DrinkName, @DrinkImage)";
                    DbUtils.AddParameter(cmd, "@UserProfileId", favoritedDrink.UserProfileId);
                    DbUtils.AddParameter(cmd, "@DrinkId", favoritedDrink.DrinkId);
                    DbUtils.AddParameter(cmd, "@DrinkName", favoritedDrink.DrinkName);
                    DbUtils.AddParameter(cmd, "@DrinkImage", favoritedDrink.DrinkImage);

                    favoritedDrink.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        DELETE FROM FavoritedDrink
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public List<FavoritedDrink> GetAllFavoritesByUserId(int id)
        {
            List<FavoritedDrink> favorites = new List<FavoritedDrink>();

            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, UserProfileId, DrinkId, DrinkName, DrinkImage
                        FROM FavoritedDrink
                        WHERE UserProfileId = @id
                        ORDER BY DrinkName";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {
                        FavoritedDrink favoritedDrink = new FavoritedDrink
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            DrinkId = DbUtils.GetInt(reader, "DrinkId"),
                            DrinkName = DbUtils.GetString(reader, "DrinkName"),
                            DrinkImage = DbUtils.GetString(reader, "DrinkImage"),
                        };

                        favorites.Add(favoritedDrink);
                    }
                    
                    reader.Close();

                    return favorites;
                }
            }
        }

        public FavoritedDrink GetFavoritedDrinkById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                         SELECT Id, UserProfileId, DrinkId, DrinkName, DrinkImage
                        FROM FavoritedDrink
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    FavoritedDrink favorite = null;

                    var reader = cmd.ExecuteReader();

                    if(reader.Read())
                    {
                        favorite = new FavoritedDrink()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            DrinkId = DbUtils.GetInt(reader, "DrinkId"),
                            DrinkName = DbUtils.GetString(reader, "DrinkName"),
                            DrinkImage = DbUtils.GetString(reader, "DrinkImage"),
                        }; 
                    }

                    return favorite;
                }
            }
        }
    }
}
