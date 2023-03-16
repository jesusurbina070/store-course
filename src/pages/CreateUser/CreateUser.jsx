import React from 'react'
import { useForm } from 'react-hook-form';
import { FormCreate } from '../../components';
import { setNewUser } from '../../services/firebase.services';



function CreateUser() {
    const {
        register,
        formState: { errors },
        getValues,
        handleSubmit,
        setValue,
    } = useForm();

    const handleCreateUser = async (data) => {
        try {
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <>
            <div>
                <h2>Subir curso</h2>
                <FormCreate
                    buttonName="Añadir Usuario"
                    handleSubmit={handleSubmit}
                    handleForm={handleCreateUser}
                >
                    <div className="FormCreate__courseinfo">
                        <input
                            className="FormCreate__input"
                            {...register("name", {
                                required: true,
                            })}
                            type="text"
                            placeholder="Nombre del usuario"
                        />
                        <input
                            className="FormCreate__input"
                            {...register("email", {
                                required: true,
                            })}
                            type="text"
                            placeholder="Correo"
                        />
                        <select {...register("rol", { required: true })}>
                            <option value="">rol</option>
                            <option value="admin">admin</option>
                            <option value="professor">professor</option>
                            <option value="studient">studient</option>
                        </select>
                        <input
                            className="FormCreate__input"
                            {...register("password", {
                                required: true,
                            })}
                            type="text"
                            placeholder="Repetir la contraseña"
                        />
                        <input
                            className="FormCreate__input"
                            {...register("passwordRepeat", {
                                required: true,
                            })}
                            type="text"
                            placeholder="Repetir la contraseña"
                        />
                    </div>
                </FormCreate>
            </div>
        </>
    )
}

export default CreateUser