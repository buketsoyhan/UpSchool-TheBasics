import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar.tsx';
import { ToastContainer } from 'react-toastify';
import { Container } from "semantic-ui-react";
import PasswordGeneratorPage from './pages/PasswordGeneratorPage.tsx';
import AccountsPage from './pages/AccountsPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import { AccountGetAllDto } from './types/AccountTypes.tsx';
import { useState } from 'react';
import { LocalUser } from './types/AuthTypes.ts';
import LoginPage from './pages/LoginPage.tsx';

const dummyAccounts: AccountGetAllDto[] = [
  {
    id: "12345",
    title: "Yemek Sepeti",
    url: "www.yemeksepeti.com",
    isFavourite: false,
    userName: "buketsoyhan",
    password: "123buket",
    categories: [],
    userId: "1",
    showPassword: false,
  },
  {
    id: "efe",
    title: "Getir",
    url: "www.getir.com",
    isFavourite: false,
    userName: "buketsoyhan",
    password: "123buket",
    categories: [],
    userId: "2",
    showPassword: false,
  }
]


function App() {
  const [accounts, setAccounts] = useState<AccountGetAllDto[]>(dummyAccounts);

  const [appUser, setAppUser] = useState<LocalUser | undefined>(undefined)

  return (
    <>
      <ToastContainer />
      <NavBar accounts={accounts} appUser={appUser} />
      <Container className="App">
        <Routes>
          <Route path='/' element={<PasswordGeneratorPage />} />
          <Route path='/accounts' element={<AccountsPage accounts={accounts} setAccounts={setAccounts} />} />
          <Route path='/login' element={<LoginPage setAppUser={setAppUser} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
