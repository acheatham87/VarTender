namespace VarTender.Models
{
    public class UserIngredient
    {
        public int Id { get; set; }
        
        public int UserProfileId { get; set; }

        public int IngredientId { get; set; }

        public Ingredient Ingredient { get; set; }
    }
}
