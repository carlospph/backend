import React, { useState, useEffect } from 'react';
import './global.css';
import GlobalStyle from './styles/global';
import styled from 'styled-components';
import { Form } from './components/Form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from './components/Grid';
import { FaTerminal } from 'react-icons/fa';
import axios from 'axios';

const ContainerHeader = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  max-width:992px;
  margin:1.5rem auto;
`;

const Logo = styled.div`
  display:flex;
  align-items:center;
  gap:4px;

  & span{
    font-weight:700;
    color: brown;
    font-size: 1.6rem;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  text-align: center;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8805");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(`Erro ao buscar usuários: ${error.message}`);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);  

  return (
    <div>

      <ContainerHeader>
      <Logo>
        <FaTerminal className="iconeTerminal"/>
        <span>Digital Store</span>
      </Logo>
      <Title>Usuários</Title>
      </ContainerHeader>

      <ToastContainer position="top-left" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={setUsers}/> 
      <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
      <GlobalStyle />
    </div>
  );
}

export default App;
