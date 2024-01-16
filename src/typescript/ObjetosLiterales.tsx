

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}

interface Direccion {
    pais: string;
    casaNo: number

}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Fernando',
        edad: 35,
        direccion: {
            pais: 'Canada',
            casaNo: 615
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                {JSON.stringify(persona, null, 2)}
            </code>
        </>
    )
}

