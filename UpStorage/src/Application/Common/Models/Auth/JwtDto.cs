namespace Application.Common.Models.Auth
{
    public class JwtDto
    {
        public string AccessToken { get; set; }
        public DateTime ExpiryDate { get; set; }

        public JwtDto(string accessToken, DateTime expirDate) { 
            AccessToken = accessToken;
            ExpiryDate = expirDate;
        }

    }
}
