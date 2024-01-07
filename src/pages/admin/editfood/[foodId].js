/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import AdminDasboardLayout from '@/components/Layouts/AdminDashboardLayout';
import Loading from '@/components/shared/Loading';
import { useGetAllCategoryQuery } from '@/features/category/categoryApi';
import { useGetFoodsByIdQuery, useUpdateFoodMutation } from '@/features/food/foodApi';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify';



const EditFood = () => {
    const [foodTitle, setFoodTitle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [stock, setStock] = useState('')
    const [meal, setMeal] = useState('')
    const router = useRouter();
    const { foodId } = router.query;


    const { data: food, isLoading, isSuccess: GetFoodSuccess } = useGetFoodsByIdQuery(foodId)
    const { data: allCategory, isLoading: categoryLoading, } = useGetAllCategoryQuery();
    const [updateFood, { isLoading: updateLoading, error: updateError, isSuccess: updateSuccess, isError: updateIsError }] = useUpdateFoodMutation()




    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            _id: foodId,
            foodTitle,
            category,
            stock,
            price,
            meal,
            description
        }
        await updateFood(data)


    }

    useEffect(() => {
        if (updateSuccess) {
            toast.success("Product Update Successfully")
        }
    }, [updateSuccess])

    useEffect(() => {
        if (GetFoodSuccess) {
            setFoodTitle(food.data.foodTitle)
            setCategory(food.data.category)
            setPrice(food.data.price)
            setDescription(food.data?.description)
            setStock(food.data.stock)
            setMeal(food.data.meal)
        }
    }, [GetFoodSuccess])


    useEffect(() => {
        if (updateIsError) {
            toast.error(updateError.data.message)
        }
    }, [updateError?.data?.message, updateIsError])







    if (isLoading || categoryLoading || updateLoading) {
        return <Loading />
    }


    return (

        <div className='  '>
            <h2 className='font-semibold text-lg text-gray-600 py-5'> Update Food Item</h2>
            <form onSubmit={handleSubmit}>
                <div className='space-y-4'>
                    <div>
                        <label className="text-gray-600 mb-2 block">Food Title <span className="text-primary">*</span></label>
                        <input type="text" name='foodTitle' defaultValue={food?.data.foodTitle} onChange={(e) => setFoodTitle(e.target.value)} className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                    </div>


                    <div className='lg:grid lg:grid-cols-2 gap-6'>
                        <div>
                            <label className="text-gray-600 mb-2 block">Price <span className="text-primary">*</span></label>
                            <input name='price' onChange={(e) => setPrice(e.target.value)} defaultValue={food?.data.price} type="number" className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">Stock <span className="text-primary">*</span></label>
                            <input name='stock' onChange={(e) => setStock(e.target.value)} defaultValue={food?.data.stock} type="text" className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                        </div>
                    </div>

                    <div className='lg:grid lg:grid-cols-2 gap-6'>
                        <div>
                            <label className="text-gray-600 mb-2 block">Category <span className="text-primary">*</span></label>
                            <select name="category" onChange={(e) => setCategory(e.target.value)} defaultValue={food?.data.category} id="" required className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                                <option value="">Select Category</option>
                                {allCategory.data.map((cat) => (
                                    <option value={cat.category}>{cat.category}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">Meal <span className="text-primary">*</span></label>
                            <select name="meal" defaultValue={food?.data.meal} onChange={(e) => setMeal(e.target.value)} id="" required className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                                <option value="">Select Meal</option>

                                <option value="Breakfast">Breakfast</option>
                                <option value="Launch">Launch</option>
                                <option value="Dinner">Dinner</option>
                                <option value="Snacks">Snacks</option>

                            </select>
                        </div>
                    </div>
                    <div className=' border border-gray-300 rounded-md p-4'>

                        <textarea onChange={(e) => setDescription(e.target.value)} defaultValue={food?.data.description} name="description" id="" cols="90" rows="10">

                        </textarea>
                    </div>




                </div>
                <button className='bg-primary text-white px-4 py-2 rounded mt-16 border border-primary hover:bg-transparent hover:text-primary disabled:bg-transparent transition '>Update</button>
            </form>

        </div>

    );
};

export default EditFood;
EditFood.getLayout = function getLayout(page) {
    return <AdminDasboardLayout>{page}</AdminDasboardLayout>;
};

