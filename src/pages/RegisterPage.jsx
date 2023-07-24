import {useForm} from 'react-hook-form';
import {useAuth} from '../context/AuthContext';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/login_register.css';

function RegisterPage () {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {signup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate();

    const NavigateNow = () => {
    useEffect(() => {
        if (isAuthenticated) navigate('/tasks');
    }, [isAuthenticated]);
    }

    const onSubmit = handleSubmit(async(values) => {
                signup(values);
                NavigateNow();
            });
    return (

        <div className='background_config flex h-[calc(100vh-100px)] items-center justify-center' >
            <div className=' form__container max-w-md w-full p-10 rounded-md' >
                {
                    /*registerErrors.map((error, index) => (
                        <div className='bg-red-500 p-2 text-white' key={index} >
                            {error}
                        </div>
                    ))*/
                }
                <h1 className="text-2xl font-bold text-center mb-5" > Register </h1>
                <form 
                    onSubmit={onSubmit}
                    >
                    <input type="text" placeholder="Enter your username" {...register("username",
                    {required: true})}
                    className="w-full px-4 py-2 border rounded-md my-2"
                    />
                    {errors.username && <p className="text-red-500"> Username is required </p>}
                    <input type="email" placeholder="Enter your email" {...register("email",
                    {required: true})}
                    className="w-full px-4 py-2 border rounded-md my-2"/>
                    {errors.email && <p className="text-red-500"> Email is required </p>}
                    <input type="password" placeholder="Enter your password" {...register("password",
                    {required:true})}
                    className="w-full px-4 py-2 border rounded-md my-2"/>
                    {errors.password && <p className="text-red-500"> Password is required </p>}
                    <button type="submit"
                    className="bg-[#c01761] text-white px-4 py-2 rounded-md my-2">
                        Regístrate
                    </button>
                </form>
                <p className="flex gap-x-2 justify-between" >
                        ¿Ya tienes una cuenta?
                        <Link to="/login" className="text-[#c01761]" > Inicia Sesión </Link>
                </p>
            </div>
        </div>
    )
}
export default RegisterPage;