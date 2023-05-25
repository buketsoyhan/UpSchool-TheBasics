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

  const myStyles = {
    iconStyles: {
      cursor: "pointer",
    }
  }

  useEffect(() => {
    const generatePasswordDto = new GeneratePasswordDto();

    generatePasswordDto.Length = 15
    generatePasswordDto.IncludeNumbers = true
    generatePasswordDto.IncludeLowerCharacters = true
    generatePasswordDto.IncludeUpperCharacters = true
    generatePasswordDto.IncludeSpecialCharacters = true

    setPassword(passwordGenerator.Generate(generatePasswordDto))

  }, [])

  const handleGenerate = (): void => {
    const generatePasswordDto = new GeneratePasswordDto()

    generatePasswordDto.Length = passwordLength;
    generatePasswordDto.IncludeNumbers = true
    generatePasswordDto.IncludeLowerCharacters = true
    generatePasswordDto.IncludeUpperCharacters = true
    generatePasswordDto.IncludeSpecialCharacters = true

    setPassword(passwordGenerator.Generate(generatePasswordDto))
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

    handleGenerate();
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
                <p className="is-size-3">{password}</p>
              </div>
              <div className="media-right">
                <span style={myStyles.iconStyles} className="is-size-3" onClick={handleSavePassword}>📁</span>
                <span style={myStyles.iconStyles} className="is-size-3" onClick={handleCopyToClipBoard}>📋</span>
                <span style={myStyles.iconStyles} className="is-size-3" onClick={handleGenerate}>♻️</span>
              </div>
            </div>
            <div className="content has-text-centered">
              <div className="field">
                <input id="passwordLengthSelector" type="range" step={1} min={6} max={40}
                  value={passwordLength} onChange={(event) => handleChange(event.currentTarget.value)} />
                <label htmlFor="passwordLengthSelector" style={{ fontSize: '24px', fontWeight: "bold" }}>{passwordLength}</label>

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