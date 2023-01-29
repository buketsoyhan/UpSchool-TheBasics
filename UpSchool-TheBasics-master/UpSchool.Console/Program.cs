using UpSchool.Console.Domain;
using UpSchool.Console.FirstExample;
using UpSchool.Console.Enums;

//Dosya yolu tanımlandi.
const string filePath = "C:\\Users\\buket\\Desktop\\UpSchool-TheBasics-master\\Access_Control_Logs.txt";

var logsText = File.ReadAllText(filePath);
// Her satırı ayrı ayrı alabilmek için split ile ayırdık.
var splitLines = logsText.Split('\n', StringSplitOptions.RemoveEmptyEntries);

splitLines.toList().forEach(x=>Console.WriteLine(x));

Console.ReadLine();

//Region kodları küçük gruplara ayırmamızı sağlar.
#region MyRegion

Student student = new Student();

student.FirstName = "Alper";

student.LastName = "Tunga";

student.TCID = "33377788999111";

Console.WriteLine(student.FullName);

student.FullName = "Alper Tunga";

Teacher teacher = new Teacher();

teacher.FirstName = "Arman";

teacher.LastName = "Tunga";

Console.WriteLine(student.FullName);

var alper = "";
var colour = Colour.Blue;

if (colour == Colour.Red)
{
    Console.WriteLine("Red");
}


Console.WriteLine(student.FullName);

Console.ReadLine();

var accessControlLog = new AccessControlLog();

if (accessControlLog.AccessType == AccessType.FACE)
{

}
#endregion


