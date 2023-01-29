namespace UpSchool.SimplePasswordGenerator
{
    public class Generator
    {
        private const string lowerCase = "Include Lower Case? ";
        private const string upperCase = "Include Upper Case? ";
        private const string numberCase = "Include Number Case? ";
        private const string charCase = "Include Char Case? ";

        private const string CapitalLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
        private const string SmallLetters = "qwertyuiopasdfghjklzxcvbnm";
        private const string Numbers = "0123456789";
        private const string SpecialCharacters = "!@#$%^&*()-_=+<,>.";
        private const string AllPassword = "";

        static public bool askBool(string question)
        {
            bool boolToReturn = false;
            string isAdd = "";
            while (true)
            {
                Console.Write(question);
                string ans = Console.ReadLine();
                if (ans != null && (ans == "y" || ans == "yes" || ans == "YES" || ans == "Y"))
                {
                    switch (question)
                    {
                        case lowerCase:
                            Console.WriteLine(isAdd);
                            break;
                        case upperCase:
                            Console.WriteLine(isAdd);
                            break;
                        case numberCase:
                            Console.WriteLine(isAdd);
                            break;
                        case charCase:
                            Console.WriteLine(isAdd);
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
            Console.WriteLine("Password Length: " + PasswordLength);
        }
    }
}