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

const dummyAccounts: AccountGetAllDto[] = [
  {
    Id: "12345",
    Title: "Yemek Sepeti",
    Url: "www.yemeksepeti.com",
    IsFavourite: false,
    UserName: "buketsoyhan",
    Password: "123buket",
    Categories: [],
    UserId: "1",
    ShowPassword: false,
  },
  {
    Id: "efe",
    Title: "Getir",
    Url: "www.getir.com",
    IsFavourite: false,
    UserName: "buketsoyhan",
    Password: "123buket",
    Categories: [],
    UserId: "2",
    ShowPassword: false,
  }
]


function App() {
  const [accounts, setAccounts] = useState<AccountGetAllDto[]>(dummyAccounts);

  return (
    <>
      <ToastContainer />
      <NavBar accounts={accounts} />
      <Container className="App">
        <Routes>
          <Route path='/' element={<PasswordGeneratorPage />} />
          <Route path='/accounts' element={<AccountsPage accounts={accounts} setAccounts={setAccounts} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
