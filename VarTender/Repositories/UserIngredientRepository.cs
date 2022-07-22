using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using VarTender.Models;
using VarTender.Utils;

namespace VarTender.Repositories
{
    public class UserIngredientRepository : BaseRepository, IUserIngredientRepository
    {
        public UserIngredientRepository(IConfiguration configuration) : base(configuration) { }

        public void Add(UserIngredient userIngredient)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO UserIngredient (UserProfileId, IngredientId)
                        OUTPUT INSERTED.ID
                        VALUES (@UserProfileId, @IngredientId)";
                    DbUtils.AddParameter(cmd, "@UserProfileId", userIngredient.UserProfileId);
                    DbUtils.AddParameter(cmd, "@IngredientId", userIngredient.IngredientId);

                    userIngredient.Id = (int)cmd.ExecuteScalar();
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
                        DELETE FROM UserIngredient
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
        public List<UserIngredient> GetAllUserIngredientsByUserId(int id)
        {
            List<UserIngredient> userIngredients = new List<UserIngredient>();

            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT ui.Id AS Id, UserProfileId, IngredientId, Name
                        FROM UserIngredient ui
                        LEFT JOIN Ingredient i ON ui.IngredientId = i.id
                        WHERE UserProfileId = @id
                        ORDER BY Name";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {
                        UserIngredient userIngredient = new UserIngredient()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            IngredientId = DbUtils.GetInt(reader, "IngredientId"),
                            Ingredient = new Ingredient()
                            {
                                Id = DbUtils.GetInt(reader, "IngredientId"),
                                Name = DbUtils.GetString(reader, "Name"),
                            }
                        };

                        userIngredients.Add(userIngredient);
                    }

                    reader.Close();

                    return userIngredients;
                }
            }
        }

        public UserIngredient GetUserIngredientById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                         SELECT ui.Id AS Id, UserProfileId, IngredientId, Name
                        FROM UserIngredient ui
                        LEFT JOIN Ingredient i ON ui.IngredientId = i.id
                        WHERE ui.Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    UserIngredient userIngredient = null;

                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        userIngredient = new UserIngredient()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            IngredientId = DbUtils.GetInt(reader, "IngredientId"),
                            Ingredient = new Ingredient()
                            {
                                Id = DbUtils.GetInt(reader, "IngredientId"),
                                Name = DbUtils.GetString(reader, "Name"),
                            }
                        };
                    }

                    return userIngredient;
                }
            }
        }
    }
}
