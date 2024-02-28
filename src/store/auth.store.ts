import { create } from "zustand";

interface AuthState {
    status: 'authenticated' | 'unautheticated' | 'checking';
    token?: string;
    user?: {
        name: string;
        email: string;
    }

    login:(email:string,password:string) => void;
    logout:()=> void;
    

}

export const useAuthStore = create<AuthState>()((set) => ({

    status: 'checking',
    token: undefined,
    user: undefined,
    login:(email:string,password:string) => {

        set({
            status:'authenticated',
            token:'ABC123',
            user:{
                name:'Leonardito',
                email:email
            }
        })

    },

    logout:() => {
        set({
        status:'unautheticated',
        token:undefined,
        user:undefined
    })
    }

}));