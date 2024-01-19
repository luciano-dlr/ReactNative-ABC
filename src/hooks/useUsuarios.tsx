import { useEffect, useRef, useState } from "react";
import { ReqResListado, Usuario } from "../interfaces/reqRes";
import { reqResApi } from "../api/reqRes";


export const useUsuarios = () => {

    //fer
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    //el useRef Es una referencia a una variable
    //que si cambia su valor siguie siendo la misma pero no 
    //dispara el procedimiento para renderizar el component
    const paginaRef = useRef(1)

    console.log('soy useRef', paginaRef.current)

    //tipo :never existe por default porque jamas va tener un valor si dejamos () 
    //vacio como valor inicial
    //Lo evitamos ingresando un valor inicial en el hook

    useEffect(() => {
        cargarUsuario();
    }, [])

    const cargarUsuario = async () => {

        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        // if (paginaRef.current === 1) {
        //     setUsuarios(resp.data.data);
        //     // paginaSiguiente()
        //     paginaRef.current++

        // } if (paginaRef.current === 2) {
        //     setUsuarios(resp.data.data);
        //     // paginaRef.current--
        //     // alert('No hay mas registros leio')
        // }
        // if (value === -1)
        //     setUsuarios(resp.data.data);
        // paginaRef.current--

        // if (value === 1) {
        //     paginaRef.current++
        //     setUsuarios(resp.data.data);
        // } else {
        //     paginaRef.current--
        //     setUsuarios(resp.data.data);
        // }

        // setUsuarios(resp.data.data);

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
        } else {
            paginaRef.current--
            alert('no hay registros lionard')
        }

    }

    const paginaSiguiente = () => {
        paginaRef.current++
        cargarUsuario()

    }

    const paginaAnterior = () => {

        if (paginaRef.current > 1) {
            paginaRef.current--
            cargarUsuario()
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior,
        cargarUsuario


    }
}
