using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using VarTender.Models;
using VarTender.Repositories;

namespace VarTender.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class FavoritedDrinkController : ControllerBase
    {
        private readonly IFavoritedDrinkRepository _favoritedDrinkRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public FavoritedDrinkController(IFavoritedDrinkRepository favoritedDrinkRepository, IUserProfileRepository userProfileRepository)
        {
            _favoritedDrinkRepository = favoritedDrinkRepository;
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
            UserProfile currentUser = GetCurrentUserProfile();
            return Ok(_favoritedDrinkRepository.GetAllFavoritesByUserId(currentUser.Id));
        }

        [HttpGet("AllById")]
        public IActionResult GetAll(int id)
        {
            return Ok(_favoritedDrinkRepository.GetAllFavoritesByUserId(id));
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var favorite = _favoritedDrinkRepository.GetFavoritedDrinkById(id);
            if (favorite == null)
            {
                return NotFound();
            }
            return Ok(favorite);
        }

        [HttpPost]
        public IActionResult Post(FavoritedDrink favoritedDrink)
        {
            UserProfile currentUser = GetCurrentUserProfile();
            favoritedDrink.UserProfileId = currentUser.Id;
            _favoritedDrinkRepository.Add(favoritedDrink);
            return CreatedAtAction("Get", new { id = favoritedDrink.Id }, favoritedDrink);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _favoritedDrinkRepository.Delete(id);
            return NoContent();
        }
    }
}
