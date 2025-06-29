import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast } from 'react-toastify';

     const FormContainer = styled.div`
        display:flex;
        gap: 1rem;
        align-items:center;
        max-width:992px;
        margin: 0 auto;
    `;

    const Campos = styled.div`
    width: 320px;
    margin:0 auto;

    & input{
        display:block;
        margin:4px auto;
        height: 45px;
        padding:0 .5rem;
        width:100%;
    }
       `;

    const Button = styled.button`
        cursor:pointer;
        padding: .5rem 1.5rem;
        display:block;
        margin: 1rem auto;
        border:0;
        background:#e6268d;
        border-radius: 5px;
        color:white;
    `;



    const Form = ({ onEdit }) => {
        const ref = useRef;


        useEffect(() => {
            if (onEdit) {
                const user = ref.current;
                user.nome.value = onEdit.nome;
                user.email.value = onEdit.email;
                user.senha.value = onEdit.senha;
            }
        }, [onEdit]);


        const handleSubmit = async (e) =>{
            e.preventDefault();

            const user = ref.current;

            if(
                !user.nome.value ||
                !user.email.value ||
                !user.senha.value
            ){
                return toast.warn("Preencha os campos");
            }

            if(onEdit){
                await axios
                .put("http://localhost:8805/" + onEdit.id, {
                    nome:user.nome.value, 
                    email:user.email.value,
                    senha:user.senha.value,
            })
            .then(({data}) => toast.success(data))
            .catch(({data}) => toast.error(data));
            }
        };


        return (

            <FormContainer onSubmit={handleSubmit}>

                <Campos>
                    <input type="text" name="nome" placeholder="Nome completo " />
                </Campos>

                <Campos>
                    <input type="text" name="email" placeholder=" E-mail" />
                </Campos>

                <Campos>
                    <input type="password" placeholder="Senha " />
                </Campos>

                <Button name="salvar" type="submit">Salvar</Button>

            </FormContainer>
        )
    }