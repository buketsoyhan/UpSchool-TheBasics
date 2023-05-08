using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using static Application.Common.Helpers.MessagesHelper;

namespace Application.Common.Localizations
{
    public static class CommonLocalizationKeys
    {
        public static class Auth
        {
            public static string EmailOrPasswordIsIncorrect => "EmailOrPasswordIsIncorrect";
        }

        public static class City
        {
            public static string Added => "CityAdded";
        }
        public static class HandlerMessages
        {
            public static string Delete => "HandlerDelete";
        }
    }
}
