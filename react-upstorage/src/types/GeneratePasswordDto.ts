export default class GeneratePasswordDto{
    public IncludeNumbers:boolean;
    public IncludeLowerCharacters:boolean;
    public IncludeUpperCharacters:boolean;
    public IncludeSpecialCharacters:boolean;
    public Length:number;

    constructor(){
        this.IncludeNumbers=true;
        this.IncludeLowerCharacters=true;
        this.Length=6;
    }
}