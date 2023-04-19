import *  as yup from 'yup';

export const LoginValidate = yup.object().shape({
    password: yup.string().trim().required("El password es requerido"),
    username: yup.string().trim().required("El Email es requerido"),
});