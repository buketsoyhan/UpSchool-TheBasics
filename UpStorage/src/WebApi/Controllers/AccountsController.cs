using Application.Features.Cities.Commands.Add;
using Application.Features.Cities.Queries.GetAll;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using 
namespace WebApi.Controllers
{
    public class AccountsController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAllAsync(int pageNumber=1, int pageSize=10)
        {
            return Ok(await Mediator.Send(new AccountGetAllQuery(pageNumber,pageSize)));
        }

        
    }
}
