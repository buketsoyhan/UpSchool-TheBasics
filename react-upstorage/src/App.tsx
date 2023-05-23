import { useEffect, useState } from 'react';
import './App.css'
import NavBar from './components/NavBar.tsx';
import PasswordGenerator from './utils/PasswordGenerator.ts';
import GeneratePasswordDto from './types/GeneratePasswordDto.ts';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [password, setPassword] = useState<string>("123456");
  const passwordGenerator = new PasswordGenerator();

  const myStyles = {
    iconStyles: {
      cursor: "pointer",
    }
  }

  useEffect(() => {
    const generatePasswordDto = new GeneratePasswordDto();

    generatePasswordDto.Length = 15;
    generatePasswordDto.IncludeNumbers = true
    generatePasswordDto.IncludeLowerCharacters = true
    generatePasswordDto.IncludeUpperCharacters = true
    generatePasswordDto.IncludeSpecialCharacters = true

    setPassword(passwordGenerator.Generate(generatePasswordDto));

  }, [])

  const handleGenerate = (): void => {
    const generatePasswordDto = new GeneratePasswordDto();

    generatePasswordDto.Length = 15;
    generatePasswordDto.IncludeNumbers = true
    generatePasswordDto.IncludeLowerCharacters = true
    generatePasswordDto.IncludeUpperCharacters = true
    generatePasswordDto.IncludeSpecialCharacters = true

    setPassword(passwordGenerator.Generate(generatePasswordDto));
  }

  const handleCopyToClipBoard = () => {
    navigator.clipboard.writeText(password);
    toast("The selected password copied to the clipboard!");
  }

  return (
    <>
      <NavBar />
      <ToastContainer />
      <div className="container" style={{ backgroundColor: "#C4DFDF" }}>
        <div className="card-header is-justify-content-center">
          <h3 className="has-text-success is-size-2">Secure Password Generator</h3>
        </div>
        <div className="card">

          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="is-size-3">{password}</p>
              </div>
              <div className="media-right">
                <i style={myStyles.iconStyles} className="is-size-3">📁</i>
                <i style={myStyles.iconStyles} className="is-size-3" onClick={handleCopyToClipBoard}>📋</i>
                <i style={myStyles.iconStyles} className="is-size-3" onClick={handleGenerate}>♻️</i>
              </div>
            </div>
            <div className="content">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App