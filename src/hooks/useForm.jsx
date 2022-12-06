import {useState} from "react"



function useForm (initialState) {
    const [form, setForm] = useState(initialState)
    
    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    return {
        handleChange: handleChange,
        formData: form,
    }


}

export default useForm