import {useState, useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import { errorFirebaseMessage } from "../utilitis/firebases.utilitis";

function useFetch(customToast) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})


    async function fetchingAuth(promiseFun) {
    try{
        setLoading(true);
        error && setError("");
        let response = await promiseFun
        toast.success('Operación exitosa', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        return response

    } catch(err){
        setError(err)
        toast.error(errorFirebaseMessage(err.code), customToast);
    }finally{
        setLoading(false)
    }
   }
    return{
        error,
        loading,
        fetchingAuth,
        ToastContainer 
    }
    
}

export default useFetch;
