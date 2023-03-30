using Application.Common.Models.Excel;

namespace Application.Common.Interfaces
{
    public interface IExcelService
    {
        List<ExcelCityDto> ReadCities(ExcelBase64Dto excelDto);
        object ReadCities(string excelBase64File);
    }
}
