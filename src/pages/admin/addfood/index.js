import AdminDasboardLayout from '@/components/Layouts/AdminDashboardLayout';
import { storage } from '@/firebase.init';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import 'react-quill/dist/quill.snow.css';



const AddFood = () => {
    const [foodTitle, setFoodTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [imagePreview, setImagePreview] = useState(null);



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
        }

        //    Image Submission Url End 
    }

    // useEffect(() => {
    //     if (imageUrl) {
    //         addProduct({
    //             productName,
    //             category,
    //             brand,
    //             price,
    //             availableQuantity,
    //             sizes,
    //             description,
    //             imgThree: imageThree,
    //             imageUrl
    //         })


    //     }
    //     if (isSuccess) {
    //         toast.success('Food Added Successfully ')
    //     }
    //     resetForm();
    // }, [imageUrl, isSuccess]);



    useEffect(() => {
        if (imageUrl) {
            console.log(imageUrl)
        }

    }, [imageUrl]);


    // if (isLoading) {
    //     return <Loading />
    // }

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
                    <div>
                        <label className="text-gray-600 mb-2 block">Food Image Upload <span className="text-primary">*</span></label>
                        <input type="file" className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" onChange={handleImageChange} />
                    </div>

                    {/* Image Preview  */}
                    {imagePreview && <div className='flex-shrink-0'>

                        <Image src={imagePreview} width={48} height={48} className="h-48 object-contain" alt="product_image" />
                    </div>}


                    <div className='h-36'>
                        {/* {<ReactQuill theme="snow" className='h-36' value={description} onChange={setDescription} />} */}
                    </div>
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

