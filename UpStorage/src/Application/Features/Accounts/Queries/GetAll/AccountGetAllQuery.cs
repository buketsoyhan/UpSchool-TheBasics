using Application.Common.Models.General;
using MediatR;

public class AccountGetAllQuery : IRequest<PaginatedList<AccountGetAllDto>>
{
    public int PageNumber { get; set; }
    public int PageSize { get; set; }

    public AccountGetAllQuery(int pageNumber, int pageSize)
    {
        PageNumber = pageNumber;

        PageSize = pageSize;
    }
}
