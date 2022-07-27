using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using VarTender.Models;
using VarTender.Repositories;

namespace VarTender.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class IngredientController : ControllerBase
    {

        private readonly IIngredientRepository _ingredientRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public IngredientController(IIngredientRepository ingredientRepository, IUserProfileRepository userProfileRepository)
        {
            _ingredientRepository = ingredientRepository;
            _userProfileRepository = userProfileRepository;
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }

        [HttpGet]
        public IActionResult Get()
        {
            UserProfile currentUser = GetCurrentUserProfile();
            return Ok(_ingredientRepository.GetAllIngredients(currentUser.Id));
        }
    }
}
