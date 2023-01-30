using System.Text;

namespace UpSchool.SimplePasswordGenerator
{
    public class Generator
    {
        private const string lowerCase = "Include Lower Case? ";
        private const string upperCase = "Include Upper Case? ";
        private const string numberCase = "Include Number Case? ";
        private const string charCase = "Include Char Case? ";
        private static string allPasword;

        private const string capitalLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
        private const string smallLetters = "qwertyuiopasdfghjklzxcvbnm";
        private const string numbers= "0123456789";
        private const string specialCharacters = "!@#$%^&*()-_=+<,>.";
        
        static public bool askBool(string question)
        {
            bool boolToReturn = false;
            while (true)
            {
                Console.Write(question);
                string ans = Console.ReadLine();
                if (ans != null && (ans == "y" || ans == "yes" || ans == "YES" || ans == "Y"))
                {
                    switch (question)
                    {
                        case lowerCase:
                            allPasword = string.Concat(allPasword, smallLetters);
                            break;
                        case upperCase:
                            allPasword = string.Concat(allPasword, capitalLetters);
                            break;
                        case numberCase:
                            allPasword = string.Concat(allPasword, numbers);
                            break;
                        case charCase:
                            allPasword = string.Concat(allPasword, specialCharacters);
                            break;
                        default:
                            Console.WriteLine("Please select at least one.");
                            break;
                    }
                    boolToReturn = true;
                    break;
                }
                else if (ans != null && (ans == "n" || ans == "no" || ans == "NO" || ans == "N"))
                {
                    boolToReturn = false;
                    break;
                }
                else
                {
                    Console.Write("Only yes or no allowed \n");
                }
            }
            return boolToReturn;
        }
        static void Main(string[] args)
        {
            int PasswordLength = 0;
            bool Valid = false;

            askBool(lowerCase);
            askBool(upperCase);
            askBool(numberCase);
            askBool(charCase);

            while (Valid == false)
            {
                Console.WriteLine("Enter the password length:");
                string answer = Console.ReadLine();

                if (int.TryParse(answer, out PasswordLength))
                {
                    PasswordLength = int.Parse(answer);

                    if (PasswordLength < 1)
                    {
                        Console.WriteLine("Please enter a value greater than zero!");
                    }
                    else
                    {
                        Valid = true;
                    }
                }
                else
                {
                    Console.WriteLine("Please enter a number!");
                }
            }
            StringBuilder res = new StringBuilder();
            Random rnd = new Random();
            while (0 < PasswordLength--)
            {
                res.Append(allPasword[rnd.Next(allPasword.Length)]);
            }
            Console.WriteLine( "Your password is: "+ res.ToString());
        }
    }
}