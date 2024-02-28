import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { useAuthStore } from '../store/auth.store';

export const Fromularios = () => {

    const { formulario, onChange, email, password } = useForm({
        email: 'test@test.com',
        password: '123456'
    })

    const authStatus = useAuthStore(state => state.status)
    const user = useAuthStore(state => state.user)


    const login = useAuthStore(state => state.login)
    const logout = useAuthStore(state => state.logout)

    useEffect(() => {

        setTimeout(() => {

            logout()

        }, 2000);


    }, [])




    if (authStatus === 'checking') {
        return <h3>Loading ..</h3>
    }

    return (
        <>
            <h3>Formulario</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Emaill"
                value={email}
                onChange={({ target }) => onChange(target.value, 'email')}
            />
            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Emaill"
                value={password}
                onChange={({ target }) => onChange(target.value, 'password')}
            />

            <code>
                <pre>{JSON.stringify(formulario, null, 2)}</pre>
            </code>

            <h3>Login Page</h3>
            {(authStatus === 'authenticated')

                ? <h6>Autenticado como : {JSON.stringify(user, null, 2)}</h6>
                : <h6>No autenticated brother</h6>

            }
            <h6>{authStatus}</h6>

            {(authStatus === 'authenticated')

                ? <button onClick={logout}>LogOut</button>
                : <button onClick={() => login('leonardito@gmail.com', '123')} >Login</button>

            }


        </>
    )
}

