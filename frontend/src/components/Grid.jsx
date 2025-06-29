import React from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Table = styled.table`
  border-top: 1px solid #ccc;
  width: 100%;
  max-width: 992px;
  margin: 1rem auto;
  padding-top: 0.6em;
`;

const ColTitle = styled.th`
  font-weight: bold;
  padding: 4px 0;
  border-bottom: 1px solid gray;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: white;
  }
  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;

const ActionButton = styled.div`
    cursor:pointer;
`;

const TableCell = styled.td`
  padding: 0.5em 0;
  text-align: center;
`;

export function Grid({ users }) {

    const handleEdit = (item) =>{
        setOnEdit(item);
    }



    const handleDelete = async (id) => {
        await axios
        .delete("http://localhost:8805/" + id)
        .then(({data}) =>{
            const newArray = users.filter((user) =>user.id !==id);
            setUsers(newArray);
            toast.success(data);
        })

        .catch(({data})=> toast.error(data));
        setOnEdit(null);
    };

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <ColTitle>Id</ColTitle>
                        <ColTitle>Nome</ColTitle>
                        <ColTitle>Email</ColTitle>
                        <ColTitle colSpan="2">Ações</ColTitle>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, i) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.nome}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>
                                <ActionButton>
                                    <FaEdit onClick={()=>handleEdit=(item)}/>
                                </ActionButton>
                            </TableCell>
                            <TableCell>
                                <ActionButton>
                                    <FaTrash onClick={handleDelete(item.id)}/>
                                </ActionButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
