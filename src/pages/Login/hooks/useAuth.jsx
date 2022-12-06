import { useState } from "react";
import { auth } from "../../../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import useForm from "../../../hooks/useForm";

function useAuth (userData){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const { handleChange, formData } = useForm({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
      });
      const { name, email, password, repeatPassword } = formData;


    const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === repeatPassword) {
      
      try {
        // registro del usuario
        setLoading(true)
        {error ? setError("") : null}
        const response = await signup(email, password);
        // subida a la base de datos

      } catch (error) {
        setError("El correo electrinico ya fue registrado en otro usuario");
      }finally{
        setLoading(false)
        
      }
    }else{
      setError("Las contraseñas no coinciden")
    }
  };

  return {
    handleSubmitAuth: handleSubmit,
    error,
    loading,
    handleChange, formData
  }

}

export default useAuth