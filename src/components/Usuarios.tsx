import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {
    //mio
    // const [users, setUsers] = useState<any>()

    //fer
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    //tipo :never porque jamas va tener un valor si dejamos () vacio como valor inicial
    //Lo evitamos con un array vacio []

    useEffect(() => {
        cargarUsuario();
    }, [])

    const cargarUsuario = async () => {

        const resp = await reqResApi.get<ReqResListado>('/users')
        setUsuarios(resp.data.data);

    }

    //fer
    const renderItem = ({ id, first_name, last_name, email, avatar }: Usuario) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img src={avatar}
                        alt={first_name}
                        style={{
                            width: 35,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        );
    };

    return (
        <>
            <h3>Usuarios: </h3>
            <table className="table">
                <thead >
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                {/* mio */}
                {/* <tbody>
                    {users && users.map((user: any) => {
                        return (
                            <tr>
                                <th>
                                    {user.name}
                                </th>
                            </tr>
                        )
                    })}
                </tbody> */}
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>
            <button
                className='btn btn-primary'
                onClick={cargarUsuario}
            >
                Siguiente
            </button>
        </>
    )
}