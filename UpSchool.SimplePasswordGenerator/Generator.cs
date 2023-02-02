using System.Text;

namespace UpSchool.SimplePasswordGenerator
{
    public class Generator
    {
        private const string lowerCase = "Include Lower Case? ";
        private const string upperCase = "Include Upper Case? ";
        private const string numberCase = "Include Number Case? ";
        private const string charCase = "Include Special Character Case? ";
        private static string? allPassword;

        private const string capitalLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
        private const string smallLetters = "qwertyuiopasdfghjklzxcvbnm";
        private const string numbers= "0123456789";
        private const string specialCharacters = "!@#$%^&*()-_=+<,>.";
        
        static public void addToString(string question)
        {
            bool valid = true;
            while (valid)
            {
                Console.Write(question);
                string ans = Console.ReadLine();
                if (ans != null && ( ans.ToUpper() == "YES" || ans.ToUpper() == "Y"))
                {
                    switch (question)
                    {
                        case lowerCase:
                            allPassword = string.Concat(allPassword, smallLetters);
                            break;
                        case upperCase:
                            allPassword = string.Concat(allPassword, capitalLetters);
                            break;
                        case numberCase:
                            allPassword = string.Concat(allPassword, numbers);
                            break;
                        case charCase:
                            allPassword = string.Concat(allPassword, specialCharacters);
                            break;
                        default:
                            Console.WriteLine("Please select at least one.");
                            break;
                    }
                    break;
                }
                else if (ans != null && ( ans.ToUpper() == "NO" || ans.ToUpper() == "N"))
                {
                    break;
                }
                else
                {
                    Console.Write("Only yes or no allowed \n");
                }
            }
        }

        static public void createPass()
        {
            int passwordLength = 0;
            bool valid = false;

            while (valid == false)
            {
                Console.WriteLine("Enter the password length:");
                string answer = Console.ReadLine();

                if (int.TryParse(answer, out passwordLength))
                {
                    passwordLength = int.Parse(answer);

                    if (passwordLength < 1)
                    {
                        Console.WriteLine("Please enter a value greater than zero!");
                    }
                    else
                    {
                        valid = true;
                    }
                }
                else
                {
                    Console.WriteLine("Please enter a number!");
                }
            }
            StringBuilder res = new StringBuilder();
            Random rnd = new Random();
            while (0 < passwordLength--)
            {
                res.Append(allPassword[rnd.Next(allPassword.Length)]);
            }
            Console.WriteLine("Your password is: " + res.ToString());
        }

        static void Main(string[] args)
        {
            

            addToString(lowerCase);
            addToString(upperCase);
            addToString(numberCase);
            addToString(charCase);

            createPass();
            
        }
    }
}