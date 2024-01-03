import RootLayout from "@/components/Layouts/RootLayout";
import Loading from "@/components/shared/Loading";
import { useAddOrderMutation } from "@/features/order/orderApi";
import { useGetUserByEmailQuery } from "@/features/user/userApi";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Checkout = () => {
    const cartFood = useSelector((state) => state.cart.cart)
    const totalPrice = cartFood.reduce((acc, food) => {
        // Calculate the subtotal for each food
        const subtotal = food.quantity * food.price;

        // Add the subtotal to the accumulator
        return acc + subtotal;
    }, 0);
    const { user } = useAuth();
    const { data: userDetails, isLoading, isError } = useGetUserByEmailQuery(user.email);
    const [addOrder] = useAddOrderMutation()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    useEffect(() => {
        if (userDetails) {
            setValue("name", userDetails.data.name || "");
            setValue("address", userDetails.data.address || "");
            setValue("district", userDetails.data.district || "");
            setValue("phonenumber", userDetails.data.phonenumber || "");
            setValue("email", userDetails.data.email || "");
        }
    }, [userDetails, setValue]);

    if (isLoading) {
        return <Loading />
    }


    const onSubmit = async (data) => {
        console.log({ data, cartFood, totalPrice })
        const orderDetails = await addOrder({ data, cartFood })
        console.log(orderDetails)
        if (orderDetails?.error?.data?.success === false) {
            toast.error(`User is Invalid!! Please Login Again`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            // localStorage.removeItem('accessToken')
            // window.location.reload()
            // navigate('/login')


        } else {
            console.log(orderDetails?.data?.url)
            window.location.replace(orderDetails?.data?.url)
        }
    }



    return (
        cartFood?.length === 0 ? <div>
            <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-4">
                <div className="col-span-8 border border-gray-200 p-4 rounded">
                    <h3 className="text-lg font-medium capitalize mb-4 bg-[#E9E4E4] p-4 text-gray-600 rounded w-full">No Carts Found</h3>
                </div>
            </div>
        </div> : <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-4">
            <div className="col-span-8 border border-gray-200 p-4 rounded">
                <h3 className="text-lg font-medium capitalize mb-4 bg-[#E9E4E4] p-4 text-gray-600 rounded w-full">Billing Details</h3>
                <form>
                    <div className="space-y-4">
                        <div>
                            <label className='text-gray-600 mb-2 block'>Name <span className='text-red-600'>*</span> </label>
                            <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400' placeholder='Enter your Full Name'
                                {
                                ...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z,'.\-\s]+$/,
                                        message: 'Please Input Valid Name'
                                    },


                                })
                                }
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                                {errors.name?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>


                        <div>
                            <label className='text-gray-600 mb-2 block'>Address <span className='text-red-600'>*</span> </label>
                            <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400' placeholder='Enter your Address'
                                {
                                ...register('address', {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }

                                })
                                }
                            />
                            <label class="label">
                                {errors.address?.type === 'required' && <span class="label-text-alt text-red-500">{errors.address.message}</span>}
                                {errors.address?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                        </div>

                        <div>
                            <label className='text-gray-600 mb-2 block'>District <span className='text-red-600'>*</span> </label>
                            <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400'
                                {
                                ...register('district', {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }

                                })
                                }
                            />
                            <label class="label">
                                {errors.district?.type === 'required' && <span class="label-text-alt text-red-500">{errors.district.message}</span>}
                                {errors.district?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.district.message}</span>}
                            </label>
                        </div>


                        <div>
                            <label className='text-gray-600 mb-2 block'>Phone Number <span className='text-red-600'>*</span> </label>
                            <input type="number" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400'
                                {
                                ...register('phonenumber', {
                                    required: {
                                        value: true,
                                        message: 'Phone Number is Required'
                                    }

                                })
                                }
                            />
                            <label class="label">
                                {errors.phonenumber?.type === 'required' && <span class="label-text-alt text-red-500">{errors.phonenumber.message}</span>}
                                {errors.phonenumber?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.phonenumber.message}</span>}
                            </label>
                        </div>
                        <div>
                            <label className='text-gray-600 mb-2 block'>Email <span className='text-red-600'>*</span> </label>
                            <input type="email" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400'
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
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                    </div>
                </form>
            </div>

            {/* checkout total item start  */}
            <div className="col-span-4 lg:mt-24 border border-gray-200 p-4 rounded">
                <h3 className="text-lg font-medium capitalize mb-4 bg-[#E9E4E4] p-4 text-gray-600 rounded w-full">Your Orders</h3>
                <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">order summery</h4>
                <div className="  space-y-2 divide-y-2">
                    {
                        cartFood.map((foods) => (
                            <div key={foods.id} className="flex justify-between pt-2 space-x-7">
                                <div>
                                    <h5 className="text-gray-800 font-normal">{foods?.foodTitle}</h5>
                                </div>
                                <p className="text-gray-600">
                                    x{foods?.quantity}
                                </p>
                                <p className="text-gray-800 font-medium">${foods?.price}</p>
                            </div>
                        ))
                    }

                    <div>
                        {/* Total and Subtotal Section Start  */}
                        <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
                            <p className="font-semibold">Total</p>
                            <p>${totalPrice}</p>
                        </div>

                        <button onClick={handleSubmit(onSubmit)} className="w-full border border-primary px-8 py-2 bg-primary disabled:bg-red-400 disabled:hover:text-white text-white rounded  hover:bg-transparent hover:text-primary transition ">Checkout</button>
                    </div>
                    {/* Total and Subtotal Section End  */}

                </div>
            </div>
            {/* checkout total item end  */}

        </div>
    );
};

export default Checkout;

Checkout.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
