import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/global';
import styled from 'styled-components';
import { Form } from './components/Form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from './components/Grid';
import axios from 'axios';

const Title = styled.h2`
  font-size: 28px;
  text-align: center;
  padding-top: 1.5rem;
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
      <Title>Usuários</Title>
      <ToastContainer position="top-left" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <Form onEdit={onEdit} setOnEdit={setOnEdit} /> 
      <Grid users={users} />
      <GlobalStyle />
    </div>
  );
}

export default App;
