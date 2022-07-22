using System.ComponentModel.DataAnnotations;

namespace VarTender.Models
{
    public class FavoritedDrink
    {
        public int Id { get; set; }

        public int UserProfileId { get; set; }

        public int DrinkId { get; set; }

        [Required]
        [MaxLength(50)]
        public string DrinkName { get; set; }

        public string DrinkImage { get; set; }

    }
}
