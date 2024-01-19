import { useForm } from '../hooks/useForm';

export const Fromularios = () => {

    const { formulario, onChange, email, password } = useForm({
        email: 'test@test.com',
        password: '123456'
    })

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
        </>
    )
}

