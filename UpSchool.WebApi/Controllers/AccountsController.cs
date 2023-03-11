using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UpSchool.Domain.Dtos;
using UpSchool.Domain.Entities;
using UpSchool.Domain.Utilities;

namespace UpSchool.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private static List<Account> _accounts = new()
        {
            new Account()
            {
                Id = Guid.NewGuid(),
                UserName = "buket",
                Password = StringHelper.Base64Encode("pass123"),
                IsFavourite = true,
                CreatedOn = DateTimeOffset.Now,
                Title = "UpSchool",
                Url = "www.upschool.com",
            }
        };

        [HttpGet]
        public IActionResult GetAll()
        {
            List<AccountDto> accountDtos = new List<AccountDto>();

            foreach(var account in _accounts)
            {
                accountDtos.Add(AccountDto.MapFromAccount(account));
            }
            return Ok(accountDtos);
        }
    }
}