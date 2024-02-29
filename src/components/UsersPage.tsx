import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { ReqResListado, Usuario } from '../interfaces/reqRes';
import { useState } from 'react';



const loadUsers = async(page:number = 1):Promise<Usuario[]> => {

   try {
    
    const {data} = await axios.get<ReqResListado>('https://reqres.in/api/users',{
        params:{
            page:page
        }
    })

    return data.data


   } catch (error) {
    
    console.log(error)
    
    return []

   }


}

export const UsersPage = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const currentPageRef = useRef(1)

    

    useEffect(() => {

        loadUsers(currentPageRef.current).then(setUsuarios)


    
    }, [])

    const handleNextPage = async () => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current)
        if (users.length > 0){
            setUsuarios(users);
        }else{
            currentPageRef.current--;
        }
    }
    const handlePrevPage = async () => {

        if(currentPageRef.current < 1) return;
        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current)
        setUsuarios(users)
    }
    



  return (
    <>
     <h3>Usuarios</h3>
     <table>
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                usuarios.map(usuarios=>(
                  <UserRow key={usuarios.id} user={usuarios}/>
                ))
            }
        </tbody>
     </table>

     <div>
        <button onClick={ handleNextPage}>Next</button>
        <button onClick={ handlePrevPage}>prev</button>
     </div>

  
    </>
  )
}


interface Props {
    user:Usuario
}



const UserRow = ({user}:Props) => {
  return (
    <tr >
    <td> <img src={user.avatar} style={{borderRadius:22}}/></td>
    <td>{user.first_name}</td>
    <td>{user.email}</td>  
</tr>
  )
}


