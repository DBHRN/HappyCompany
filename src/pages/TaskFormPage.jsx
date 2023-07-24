import {useForm} from 'react-hook-form';
import {useTasks} from '../context/TasksContext';
import {useNavigate, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import '../styles/login_register.css';

dayjs.extend(utc)

function TaskFormPage() {

    const {register, handleSubmit, setValue, formState: {errors}} = useForm();
    const {createTask, getTask, updateTask} = useTasks();
    const navigate = useNavigate();
    const params = useParams();
    console.log(createTask);

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTask(params.id);
                setValue('title', task.title)
                setValue('description', task.description)
                setValue('date', dayjs.utc(task.date).format('YYYY-MM-DD'))
            }
        }
        loadTask();
    },[]);

    const onSubmit = handleSubmit((data) => {
        const dataValid = {
            ...data,
            date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
        }
        if (params.id){
            updateTask(params.id,dataValid);
        } else {
            createTask(dataValid);
        }
        navigate('/tasks');
    });
    return (
        <div className='background_config flex h-[calc(100vh-100px)] items-center justify-center' >
            <div className='form__container max-w-md w-full p-10 rounded-md' >
                <form onSubmit={onSubmit}>
                    <h1 className="text-2xl font-bold text-center mb-5" > Add Task </h1>
                    <label htmlFor='title' >Título</label>
                    <input type="text" placeholder="Enter your task"
                    {...register("title", {required: true})} autoFocus
                    className='w-full px-4 py-2 rounded-md my-2'/>
                    {errors.task && <p> Task is required </p>}
                    <label htmlFor='title' >Descripción</label>
                    <textarea rows="3" placeholder="Enter your description"
                    {...register("description", {required: true})}
                    className='w-full px-4 py-2 rounded-md my-2'
                    />
                    {errors.description && <p> Description is required </p>}
                    <label htmlFor='date' >Fecha</label>
                    <input type='date' {...register('date')}
                    className='w-full px-4 py-2 rounded-md my-2'/>
                    <button className='bg-[#c01761] text-white rounded-md p-2 ' type="submit">
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    )
}

export default TaskFormPage