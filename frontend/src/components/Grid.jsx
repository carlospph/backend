import React from 'react';
import styled from 'styled-components';
import axios from 'axios'; 
import { toast } from 'react-toastify'


const Table = styled.table`
    border: 1px solid red;
`;
 

//    grid ({users}) - parte que vem do banco de dados

export function Grid({users}) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, i) => (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td> [faedit] </td>
                            <td> [fatrash] </td>


                             {/* onClick={()=>handleDelete(item.id)} */}

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

/***
   
 * 
 * 
 *  */

