using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SuperHero.Models;

namespace SuperHero.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperHeroController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAllHeroes()
        {
            var superHeroes = new List<Hero>
            {
                new Hero { Id = 1, 
                    Name="Spider Name", 
                    FirstName="Peter", 
                    LastName="Parker", 
                    Place="NYC" 
                }
            };

            return Ok(superHeroes);
        }
    }
}
