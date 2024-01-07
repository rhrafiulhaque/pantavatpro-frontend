/* eslint-disable react/jsx-key */
import AdminDasboardLayout from '@/components/Layouts/AdminDashboardLayout';
import Loading from '@/components/shared/Loading';
import { useGetAllCategoryQuery } from '@/features/category/categoryApi';
import { useAddFoodMutation } from '@/features/food/foodApi';
import { storage } from '@/firebase.init';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify';



const AddFood = () => {
    const [foodTitle, setFoodTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [meal, setMeal] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const { data: allCategory, isLoading: categoryLoading, } = useGetAllCategoryQuery();
    const [addFood, { isLoading, isError, isSuccess }] = useAddFoodMutation()


    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            setImagePreview(URL.createObjectURL(e.target.files[0]))
        }
    }

    const resetForm = () => {
        setFoodTitle('')
        setCategory('')
        setPrice('')
        setStock('')
        setDescription('')
        setImage('')
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        //    Image Submission Url Start
        if (image) {
            setLoading(true); // Set loading state for image upload
            const imageRef = ref(storage, `food/image/${image.name}`);
            let newUrl = null;
            try {
                await uploadBytesResumable(imageRef, image);
                const url = await getDownloadURL(imageRef);
                if (url) {
                    newUrl = url;
                } else {
                    console.log("URL is null or undefined");
                }
            } catch (error) {
                console.log(error.message);
            }
            if (newUrl) {
                setImageUrl(newUrl);
            }
            setLoading(false); // Unset loading state after image upload
        }



        //    Image Submission Url End 
    }

    useEffect(() => {
        if (imageUrl) {
            addFood({
                foodTitle,
                category,
                price: Number(price),
                stock: Number(stock),
                meal,
                description,
                image: imageUrl,

            })


        }
        if (isSuccess) {
            toast.success('Food Added Successfully ')
        }
        resetForm();
    }, [imageUrl, isSuccess]);


    if (isLoading || categoryLoading || loading) {
        return <Loading />
    }

    return (

        <div className='  '>
            <h2 className='font-semibold text-lg text-gray-600 py-5'> Add New Food Item</h2>
            <form onSubmit={handleSubmit}>
                <div className='space-y-4'>
                    <div>
                        <label className="text-gray-600 mb-2 block">Food Title <span className="text-primary">*</span></label>
                        <input type="text" className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" onChange={(e) => setFoodTitle(e.target.value)} />
                    </div>

                    <div className='lg:grid lg:grid-cols-2 gap-6'>
                        <div>
                            <label className="text-gray-600 mb-2 block">Price <span className="text-primary">*</span></label>
                            <input type="number" className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">Product Availabel Quantity  <span className="text-primary">*</span></label>
                            <input type="text" className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" onChange={(e) => setStock(e.target.value)} />
                        </div>
                    </div>

                    <div className='lg:grid lg:grid-cols-2 gap-6'>
                        <div>
                            <label className="text-gray-600 mb-2 block">Category <span className="text-primary">*</span></label>
                            <select name="category" onChange={(e) => setCategory(e.target.value)} id="" required className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                                <option value="">Select Category</option>
                                {allCategory.data.map((cat) => (
                                    <option value={cat.category}>{cat.category}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">Meal <span className="text-primary">*</span></label>
                            <select name="meal" onChange={(e) => setMeal(e.target.value)} id="" required className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                                <option value="">Select Meal</option>

                                <option value="Breakfast">Breakfast</option>
                                <option value="Launch">Launch</option>
                                <option value="Dinner">Dinner</option>
                                <option value="Snacks">Snacks</option>

                            </select>
                        </div>
                    </div>
                    <div className=' border border-gray-300 rounded-md p-4'>

                        <textarea onChange={(e) => setDescription(e.target.value)} name="description" id="" cols="90" rows="10">

                        </textarea>
                    </div>




                    <div>
                        <label className="text-gray-600 mb-2 block">Food Image Upload <span className="text-primary">*</span></label>
                        <input type="file" className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" onChange={handleImageChange} />
                    </div>

                    {/* Image Preview  */}
                    {imagePreview && <div className='flex-shrink-0'>

                        <Image src={imagePreview} width={48} height={48} className="h-48 object-contain" alt="product_image" />
                    </div>}

                </div>
                <button className='bg-primary text-white px-4 py-2 rounded mt-16 border border-primary hover:bg-transparent hover:text-primary disabled:bg-transparent transition '>Add</button>
            </form>

        </div>

    );
};

export default AddFood;
AddFood.getLayout = function getLayout(page) {
    return <AdminDasboardLayout>{page}</AdminDasboardLayout>;
};

