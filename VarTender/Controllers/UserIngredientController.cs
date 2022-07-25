using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using VarTender.Models;
using VarTender.Repositories;

namespace VarTender.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UserIngredientController : ControllerBase
    {
        private readonly IUserIngredientRepository _userIngredientRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public UserIngredientController(IUserIngredientRepository userIngredientRepository, IUserProfileRepository userProfileRepository)
        {
            _userIngredientRepository = userIngredientRepository;
            _userProfileRepository = userProfileRepository;
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }

        [HttpGet("AllByFirebase")]
        public IActionResult Get()
        {
            UserProfile currentUSer = GetCurrentUserProfile();
            return Ok(_userIngredientRepository.GetAllUserIngredientsByUserId(currentUSer.Id));
        }

        [HttpGet("AllById")]
        public IActionResult GetAll(int Id)
        {
            return Ok(_userIngredientRepository.GetAllUserIngredientsByUserId(Id));
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var userIngredient = _userIngredientRepository.GetUserIngredientById(id);
            if (userIngredient == null)
            {
                return NotFound();
            }
            return Ok(userIngredient);
        }

        [HttpPost]
        public IActionResult Post(UserIngredient userIngredient)
        {
            _userIngredientRepository.Add(userIngredient);
            return CreatedAtAction("Get", new { id = userIngredient.Id }, userIngredient);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userIngredientRepository.Delete(id);
            return NoContent();
        }
    }
}
