import RootLayout from '@/components/Layouts/RootLayout';
import Loading from '@/components/shared/Loading';
import { useLogInMutation } from '@/features/user/userApi';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [logIn, { isSuccess, isError, error, isLoading }] = useLogInMutation()



    const onSubmit = async (data) => {
        const userInfo = await logIn(data);
        localStorage.setItem('accessToken', userInfo?.data?.data?.accessToken)
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('User Successfully Logged In')
        }
    }, [isSuccess])


    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.message)
        }
    }, [isError, error?.data?.message])

    if (isLoading) {
        return <Loading />
    }




    return (
        <div className='container py-16'>
            <div className='mx-auto max-w-lg shadow px-6 py-7 rounded overflow-hidden'>
                <h1 className='uppercase font-medium text-2xl mb-1' >Login</h1>
                <p className='text-gray-600 mb-6 text-sm'>
                    Login If you are ruturing customer
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-4'>
                        <div>
                            <label className='text-gray-600 mb-2 block'>Email <span className='text-red-600'>*</span> </label>
                            <input type="email" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400' placeholder='Enter your Email Address'
                                {
                                ...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: 'Please Input Valid Email'
                                    }

                                })
                                }
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="password" className='text-gray-600 mb-2 block'>Password<span className='text-red-600'>*</span> </label>
                            <input type="password" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400' placeholder='Password'
                                {
                                ...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },

                                })
                                }
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <div className='flex justify-between'>
                            <span><input type="checkbox" /> Remember me</span>

                            <a href="" className='text-primary font-medium' >Forgot Password</a>
                        </div>
                        <div>
                            <button className='px-4 py-2 w-full rounded border border-primary bg-primary text-white hover:bg-white hover:text-primary transition' type='submit'>Login</button>
                            {/* {signInError && <p className='text-red-500'>{signInError}</p>} */}
                        </div>
                    </div>
                </form>

                <div className='mt-6 flex justify-center relative'>
                    <div className=' text-gray-600 uppercase px-3 bg-white z-10 relative'>Or Login with</div>
                    <div className=' absolute left-0 top-3 w-full border-b-2 border-gray-200'></div>
                </div>

                <div className='mt-6 flex justify-center gap-4'>
                    <button className='w-1/2 py-2  text-center bg-yellow-600 text-white rounded uppercase font-roboto font-medium text-sm hover:bg-yellow-500 transition' onClick={() => signInWithGoogle()} >Google</button>
                </div>
                <p className='mt-4 text-gray-600 text-center'> Donot Have an account? <a href={'/register'} className='cursor-pointer text-primary'> Register Now</a> </p>
            </div>
        </div>
    );
};

export default Login;

Login.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
