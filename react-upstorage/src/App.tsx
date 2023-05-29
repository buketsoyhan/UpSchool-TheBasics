import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.tsx'
import PasswordGenerator from './utils/PasswordGenerator.ts'
import GeneratePasswordDto from './types/GeneratePasswordDto.ts'
import { ToastContainer, toast } from 'react-toastify'

function App() {

  const [password, setPassword] = useState<string>("123456")
  const passwordGenerator = new PasswordGenerator()

  const [savedPasswords, setSavedPasswords] = useState<string[]>([])

  const [passwordLength, setPasswordLength] = useState<number>(12);

  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowecase] = useState<boolean>(true);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState<boolean>(false);

  const myStyles = {
    iconStyles: {
      cursor: "pointer",
    }
  }

  useEffect(() => {
    handleGenerate()
  }, [passwordLength, includeNumbers,includeLowercase,includeUppercase,includeSpecialChars])

  const handleGenerate = (): void => {
    const generatePasswordDto = new GeneratePasswordDto()

    generatePasswordDto.Length = passwordLength;
    generatePasswordDto.IncludeNumbers = includeNumbers
    generatePasswordDto.IncludeLowerCharacters = includeLowercase
    generatePasswordDto.IncludeUpperCharacters = includeUppercase
    generatePasswordDto.IncludeSpecialCharacters = includeSpecialChars

    const newPass = passwordGenerator.Generate(generatePasswordDto)

    setPassword(newPass)
  }

  const handleSavePassword = () => {

    const samePassword = savedPasswords.find(x => x === password)

    if (!samePassword) setSavedPasswords((prevState) => [...prevState, password])
  }

  const handleSavedPasswordDelete = (selectedPass: string) => {
    const newSavedPasswords = savedPasswords.filter((pass) => pass != selectedPass)
    setSavedPasswords(newSavedPasswords)
  }

  const handleChange = (value: string) => {

    setPasswordLength(Number(value));

    //handleGenerate();
  }


  const handleCopyToClipBoard = () => {
    navigator.clipboard.writeText(password)
    toast("The selected password copied to the clipboard!")
  }

  return (
    <>
      <NavBar />
      <ToastContainer />
      <div className="container App">
        <div className="card-header is-justify-content-center">
          <h3 className="has-text-success is-size-2">Secure Password Generator</h3>
        </div>
        <div className="card" style={{ backgroundColor: "#ECF8F9" }}>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="is-size-4">{password}</p>
              </div>
              <div className="media-right">
                <span style={myStyles.iconStyles} className="is-size-3" onClick={handleSavePassword}>📁</span>
                <span style={myStyles.iconStyles} className="is-size-3" onClick={handleCopyToClipBoard}>📋</span>
                <span style={myStyles.iconStyles} className="is-size-3" onClick={handleGenerate}>♻️</span>
              </div>
            </div>
            <div className="content has-text-centered">
              <div className="field">
                <input id="passwordLengthSelector" type="range" step={1} min={6} max={35} className="input mr-3"
                  value={passwordLength} onChange={(event) => handleChange(event.currentTarget.value)} />
                <label htmlFor="passwordLengthSelector" style={{ fontSize: '24px', fontWeight: "bold" }}>{passwordLength}</label>
              </div>
              <div className="field">
                <label className="checkbox mr-2">
                  <input type="checkbox" className="mr-1" checked={includeNumbers} onChange={(e)=>setIncludeNumbers(e.currentTarget.checked)}/>
                  Numbers
                </label>
                <label className="checkbox mr-2">
                  <input type="checkbox" className="mr-1" checked={includeLowercase} onChange={(e)=>setIncludeLowecase(e.currentTarget.checked)}/>
                  Lowercase
                </label>
                <label className="checkbox mr-2">
                  <input type="checkbox" className="mr-1" checked={includeUppercase} onChange={(e)=>setIncludeUppercase(e.currentTarget.checked)}/>
                  Uppercase
                </label>
                <label className="checkbox mr-2">
                  <input type="checkbox" className="mr-1" checked={includeSpecialChars} onChange={(e)=>setIncludeSpecialChars(e.currentTarget.checked)}/>
                  Special Chars
                </label>
              </div>
              <ol className="list is-hoverable">
                {savedPasswords.map((pass, index) => (
                  <li className='list-item has-text-weight-bold' key={index} >
                    {pass}
                    <span style={myStyles.iconStyles} onClick={() => handleSavedPasswordDelete(pass)}>🗑️</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App