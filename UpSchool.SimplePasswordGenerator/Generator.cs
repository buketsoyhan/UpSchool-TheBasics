using System.Text;

namespace UpSchool.SimplePasswordGenerator
{
    public class Generator
    {
        private const string lowerCase = "Include Lower Case? ";
        private const string upperCase = "Include Upper Case? ";
        private const string numberCase = "Include Number Case? ";
        private const string charCase = "Include Char Case? ";
        private static string? allPasword;

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
                    break;
                }
                else if (ans != null && (ans == "n" || ans == "no" || ans == "NO" || ans == "N"))
                {
                    break;
                }
                else
                {
                    Console.Write("Only yes or no allowed \n");
                }
            }
        }
        static void Main(string[] args)
        {
            int passwordLength = 0;
            bool valid = false;

            addToString(lowerCase);
            addToString(upperCase);
            addToString(numberCase);
            addToString(charCase);

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
                res.Append(allPasword[rnd.Next(allPasword.Length)]);
            }
            Console.WriteLine( "Your password is: "+ res.ToString());
        }
    }
}