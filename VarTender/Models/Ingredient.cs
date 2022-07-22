using System.ComponentModel.DataAnnotations;

namespace VarTender.Models
{
    public class Ingredient
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

    }
}
