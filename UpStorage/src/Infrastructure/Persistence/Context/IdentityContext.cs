using Infrastructure.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Infrastructure.Persistence.Context
{
    public class IdentityContext:IdentityDbContext<User,Role,string,UserClaim,RoleClaim, UserRole, UserLogin, UserToken>
    {
    }
}
