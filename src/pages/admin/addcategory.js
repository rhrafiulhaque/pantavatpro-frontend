/* eslint-disable @next/next/no-img-element */
import AdminDasboardLayout from '@/components/Layouts/AdminDashboardLayout';
import Loading from '@/components/shared/Loading';
import { useAddCategoryMutation } from '@/features/category/categoryApi';
import { storage } from '@/firebase.init';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AddCategory = () => {
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [catImg, setCatImg] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);

    const [addCategory, { isSuccess, isLoading, isError, error }] = useAddCategoryMutation();


    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            setImagePreview(URL.createObjectURL(e.target.files[0]));
        }
    }

    const resetForm = () => {
        setCategory('');
        setImage(null);
        setCatImg('');
        setImagePreview(null);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (image) {
            const imageRef = ref(storage, `food/category/${image.name}`);
            let newUrl = null;
            try {
                setLoading(true); // Set loading state for image upload
                await uploadBytesResumable(imageRef, image);
                const url = await getDownloadURL(imageRef);
                if (url) {
                    newUrl = url;
                } else {
                    console.log("URL is null or undefined");
                }
            } catch (error) {
                console.log(error.message);
                // Handle error here
            }
            if (newUrl) {
                setCatImg(newUrl);
            }
            setLoading(false); // Unset loading state after image upload
        }
    }

    useEffect(() => {
        if (catImg && category !== '') {
            addCategory({
                category,
                image: catImg
            });
        }
    }, [catImg, category, addCategory]);

    useEffect(() => {
        if (isSuccess) {
            toast.success('Category Uploaded Successfully');
            resetForm();
        }
        if (isError) {
            resetForm();
            toast.error(error.data.message);
        }
    }, [isSuccess, isError, error]);

    if (isLoading || loading) {
        return <Loading />
    }

    return (

        <div className=''>
            <h2 className='font-semibold text-lg text-gray-600 py-5'>Add New Category</h2>
            <form onSubmit={handleSubmit}>
                <div className='space-y-4'>
                    <div>
                        <label className="text-gray-600 mb-2 block">Category Name <span className="text-primary">*</span></label>
                        <input type="text" required className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" onChange={(e) => setCategory(e.target.value)} />
                    </div>

                    <div>
                        <label className="text-gray-600 mb-2 block">Category Image Upload <span className="text-primary">*</span></label>
                        <input type="file" required className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" onChange={handleImageChange} />
                    </div>

                    {imagePreview && (
                        <div className='flex-shrink-0'>
                            <img src={imagePreview} className="h-48 object-contain" alt="product_image" />
                        </div>
                    )}
                </div>
                <button disabled={isLoading || loading} className='bg-primary text-white px-4 py-2 rounded mt-8 border border-primary hover:bg-transparent hover:text-primary disabled:bg-transparent transition'>Add</button>
            </form>
        </div>
    );
};

export default AddCategory;


AddCategory.getLayout = function getLayout(page) {
    return <AdminDasboardLayout>{page}</AdminDasboardLayout>;
};
