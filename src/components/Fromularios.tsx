import { useState } from 'react';


export const Fromularios = () => {

    const [formulario, setFromulario] = useState({
        email: 'test@test.com',
        password: '123456'
    })

    const onChange = (value: string, campo: string) => {
        setFromulario({
            ...formulario,
            [campo]: value
        })
    }

    return (
        <>
            <h3>Formulario</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Emaill"
                value={formulario.email}
                onChange={({ target }) => onChange(target.value, 'email')}
            />
            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Emaill"
                value={formulario.password}
                onChange={({ target }) => onChange(target.value, 'password')}
            />

            <code>
                <pre>{JSON.stringify(formulario, null, 2)}</pre>
            </code>
        </>
    )
}

