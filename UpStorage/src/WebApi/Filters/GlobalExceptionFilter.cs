using Microsoft.AspNetCore.Mvc.Filters;
using FluentValidation;
using Application.Common.Models.Errors;
using System.Text.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Filters
{
    public class GlobalExceptionFilter:IAsyncExceptionFilter
    {
        public Task OnExceptionAsync(ExceptionContext context)
        {
            ApiErrorDto apiErrorDto = new ApiErrorDto();

            switch (context.Exception)
            {
                case ValidationException:
                    var validationException=context.Exception as ValidationException;

                    var propertyNames = validationException.Errors
                        .Select(x => x.PropertyName)
                        .Distinct();

                    foreach(var propertyName in propertyNames){
                        var propertyFailures = validationException.Errors
                            .Where(e=>e.PropertyName == propertyName)
                            .Select(x=>x.ErrorMessage)
                            .ToList();

                        apiErrorDto.Errors.Add(new ErrorDto(propertyName, propertyFailures));
                    }
                    apiErrorDto.Message = "One or more validation errors were occured.";

                    context.Result = new BadRequestObjectResult(apiErrorDto);
                    break;

                default:
                    apiErrorDto.Message = "An unexpected error was occured.";
                    context.Result = new ObjectResult(apiErrorDto)
                    {
                        StatusCode = (int)StatusCodes.Status500InternalServerError
                    };

                    break;
            }
            return Task.CompletedTask;
        }
    }
}
