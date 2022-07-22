using Microsoft.AspNetCore.Mvc;
using VarTender.Models;
using VarTender.Repositories;

namespace VarTender.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class IngredientController : ControllerBase
    {

        private readonly IIngredientRepository _ingredientRepository;

        public IngredientController(IIngredientRepository ingredientRepository)
        {
            _ingredientRepository = ingredientRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_ingredientRepository.GetAllIngredients());
        }
    }
}
