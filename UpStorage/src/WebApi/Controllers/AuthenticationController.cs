using Microsoft.AspNetCore.Mvc;
using Application.Features.Auth.Commands.Register;
using Application.Features.Auth.Commands.Login;

namespace WebApi.Controllers
{
    [Route("/api[controller]")]
    [ApiController]
    public class AuthenticationController : ApiControllerBase
    {
        [HttpPost("Register")]
        public async Task<IActionResult> RegisterAsync(AuthRegisterCommand command)
        {
            return Ok(await Mediator.Send(command));
        }

        [HttpPost("Login")]
        public async Task<IActionResult> LoginAsync(AuthLoginCommand command)
        {
            return Ok(await Mediator.Send(command));
        }
    }
}
