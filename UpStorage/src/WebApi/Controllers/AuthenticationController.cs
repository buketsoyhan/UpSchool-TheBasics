using Microsoft.AspNetCore.Mvc;
using Application.Features.Auth.Commands.Register;

namespace WebApi.Controllers
{
    [Route("/api[controller]")]
    [ApiController]
    public class AuthenticationController : ApiControllerBase
    {
        [HttpPost("Register")]
        public async Task<IActionResult> ReagisterAsync(AuthRegisterCommand command)
        {
            return Ok(await Mediator.Send(command));
        }
    }
}
