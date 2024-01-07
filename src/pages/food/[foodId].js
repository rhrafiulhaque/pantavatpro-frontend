/* eslint-disable @next/next/no-img-element */
import RootLayout from '@/components/Layouts/RootLayout';
import AddReviews from '@/components/Review/AddReviews';
import ReviewListOfProduct from '@/components/homePage/ReviewListOfProduct';
import ProductRatings from '@/components/productRatings';
import Loading from '@/components/shared/Loading';
import { addCart } from '@/features/cart/cartSlice';
import { useGetFoodsByIdQuery } from '@/features/food/foodApi';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const router = useRouter();
    const { foodId } = router.query;
    const dispatch = useDispatch();
    const { data: food, isLoading } = useGetFoodsByIdQuery(foodId)
    const { averageRating, ratingsQuantity, category, description, foodTitle, image, stock, meal, price } = food?.data || {}


    const [quantity, setQuantity] = useState(1);

    if (isLoading) {
        return <Loading />
    }



    const handleAddToCart = () => {
        const { _id, foodTitle, price, image } = food.data;
        dispatch(addCart({ _id, foodTitle, quantity, price, image }))
        toast.success(`${foodTitle} added to Cart`)
    }
    const handleBuyNow = async (_id, productName, quantity, price, img) => {


    }

    return (
        <div className='container mx-auto'>
            <div className=' grid lg:grid-cols-2 gap-6 mt-10'>
                <div className='h-[520px] w-full object-fill'>
                    <img src={image} className="h-[520px] w-full  object-contain" alt='' />
                </div>
                <div className='space-y-2'>
                    <h1 className='uppercase text-2xl font-medium'>{foodTitle}</h1>
                    <div className='flex items-center space-x-2'>
                        <ProductRatings ratings={averageRating} />
                        <span className='flex items-center justify-center text-sm text-gray-500'> {ratingsQuantity} reviews</span>
                    </div>

                    <div className='space-y-3 '>
                        <h2 className='font-semibold'>Availability: {stock > 0 ? <span className='text-green-700 font-normal'>In Stock</span> : <span className='text-red-700 font-semibold'>Out Of Stock</span>}</h2>

                        <h2 className='font-semibold'>Category: <span className='text-gray-800 font-normal'>{category}</span></h2>

                        <h1 className='text-primary text-xl font-semibold '>${price} </h1>

                        {/* <p>{description}</p> */}
                        <div dangerouslySetInnerHTML={{ __html: description }}></div>





                        {/* Product Quantity Start */}
                        <div className='mt-8'>
                            <h1 className='text-normal text-base uppercase '>Quantity</h1>
                            <div className='flex border border-gray-300 divide-x divide-gray-300 w-max'>
                                <button className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none' onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
                                <span className='h-8 w-8 text-base flex items-center justify-center cursor-pointer select-none'>{quantity}</span>
                                <button className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none' onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                        </div>
                        {/* Product Quantity End */}

                        {/* Cart and Buythings Start  */}
                        <div className='flex  gap-6'>
                            <button className='text-uppercase px-8 py-3 border border-gray-800 text-gray-800 rounded hover:border-primary hover:text-primary transition disabled:hover:cursor-not-allowed' disabled={stock === 0 || stock === undefined}  > <FontAwesomeIcon icon={faHeart} />  Buy Now</button>
                            <button className=' flex justify-center items-center text-uppercase px-8 py-3 border-primary border bg-primary text-white rounded-md hover:bg-white hover:text-primary transition disabled:hover:bg-none disabled:text-white disabled:hover:cursor-not-allowed disabled:bg-red-400' disabled={stock === 0 || stock === undefined} onClick={() => handleAddToCart()} > <FontAwesomeIcon icon={faCartShopping} className="mr-2" /> Add to Cart</button>


                        </div>
                        {/* Cart and Buythings End  */}
                    </div>


                </div>

            </div>






            <ReviewListOfProduct foodId={foodId} />

            <AddReviews />
            {/* <RelatedProducts category={category} /> */}
        </div>
    );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
