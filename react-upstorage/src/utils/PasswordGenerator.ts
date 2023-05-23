import GenerePasswordDto from "../types/GeneratePasswordDto";

export default class PasswordGenerator{
    private static readonly Numbers: string = "0123456789";
    private static readonly LowercaseCharacters: string = "abcdefghijklmnopqrstuvwxyz";
    private static readonly UppercaseCharacters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static readonly SpecialCharacters: string = "!@#$%^&*()";

    public Generate(generatePasswordDto:GenerePasswordDto):string{
        let charSet="";
        let password="";

        if(generatePasswordDto.IncludeNumbers) charSet +=PasswordGenerator.Numbers;
        if(generatePasswordDto.IncludeLowerCharacters) charSet +=PasswordGenerator.LowercaseCharacters;
        if(generatePasswordDto.IncludeUpperCharacters) charSet +=PasswordGenerator.UppercaseCharacters;
        if(generatePasswordDto.IncludeSpecialCharacters) charSet +=PasswordGenerator.SpecialCharacters;

        if(!generatePasswordDto.IncludeNumbers 
            && !generatePasswordDto.IncludeLowerCharacters 
            && !generatePasswordDto.IncludeUpperCharacters 
            && !generatePasswordDto.IncludeSpecialCharacters) return "";
        
        for(let i=0; i<generatePasswordDto.Length; i++){
            password+=charSet[Math.floor(Math.random()*charSet.length)]
        }

        return password;
    }

}