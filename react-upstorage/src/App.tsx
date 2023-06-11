import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar.tsx';
import { ToastContainer } from 'react-toastify';
import { Container } from "semantic-ui-react";
import PasswordGeneratorPage from './pages/PasswordGeneratorPage.tsx';
import AccountsPage from './pages/AccountsPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import { AccountGetAllDto } from './types/AccountTypes.tsx';
import { useEffect, useState } from 'react';
import { LocalJwt, LocalUser } from './types/AuthTypes.ts';
import LoginPage from './pages/LoginPage.tsx';
import { useNavigate } from 'react-router-dom';
import { getClaimsFromJwt } from './utils/jwtHelper.ts';
import { AppUserContext, AccountsContext} from './context/StateContext.tsx';
import { dummyAccounts } from './utils/dummyData.ts';


function App() {
  const [accounts, setAccounts] = useState<AccountGetAllDto[]>(dummyAccounts);

  const [appUser, setAppUser] = useState<LocalUser | undefined>(undefined)

  const navigate = useNavigate();

  useEffect(() => {
    const jwtJson = localStorage.getItem("upstorage_user")

    if (!jwtJson) {
      navigate("/login")
      return
    }


    const localJwt: LocalJwt = JSON.parse(jwtJson);

    const {uid, email, given_name,family_name}=getClaimsFromJwt(localJwt.accessToken)

    const expires: string = localJwt.expires;

    setAppUser({id:uid, email, firstName:given_name, lastName:family_name, expires, accessToken:localJwt.accessToken})
  },[])

  return (
    <>
      <AppUserContext.Provider value={{appUser,setAppUser}} >
      <AccountsContext.Provider value={{accounts,setAccounts}}>
      <ToastContainer />
      <NavBar/>
      <Container className="App">
        <Routes>
          <Route path='/' element={<PasswordGeneratorPage />} />
          <Route path='/accounts' element={<AccountsPage/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Container>
      </AccountsContext.Provider>
      </AppUserContext.Provider>
    </>
  )
}

export default App
