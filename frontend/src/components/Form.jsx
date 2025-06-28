import { useRef } from 'react';
import styled from 'styled-components';

export function Form() {
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
        background:rgb(230, 38, 141);
        border-radius: 5px;
        color:white;
    `;


    
    const Form = ({ onEdit}) => {
        const ref = useRef;
    }


    return (

        <FormContainer>
            
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