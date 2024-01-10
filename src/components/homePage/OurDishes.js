/* eslint-disable @next/next/no-img-element */
import { addCart } from '@/features/cart/cartSlice';
import { useGetFoodsQuery } from '@/features/food/foodApi';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import ProductRatings from '../productRatings';
import Loading from '../shared/Loading';

const OurDishes = () => {
    let content = null;
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [items, setItems] = useState([]);
    const limitPerPage = 4;

    const { data: foods, isLoading, error, isError } = useGetFoodsQuery({ page, limit: limitPerPage });


    const dispatch = useDispatch()

    const handleAddToCart = (food) => {
        const { _id, foodTitle, price, image } = food;
        const quantity = 1;
        dispatch(addCart({ _id, foodTitle, quantity, price, image }))
        toast.success(`${foodTitle} added to Cart`)
    }

    const handleLoadMore = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    useEffect(() => {
        if (foods) {
            setTotalPages(Math.ceil(foods?.meta?.total / limitPerPage));
            setItems((prevItems) => [...prevItems, ...foods.data]);
        }
    }, [foods]);


    if (isLoading) {
        return <Loading />
    }
    if (!isLoading && isError) {
        content = <p className='text-red-500 font-semibold'>There have an problem to fetch the Foods</p>
    }
    if (!isLoading && !isError && foods?.data?.length === 0) {
        content = <p className='text-red-500 font-semibold'>There have no Foods</p>
    }
    if (!isLoading && !isError && foods?.data?.length > 0) {
        content = items.map((food) => (
            <div key={food.id} className="max-w-sm bg-white border border-gray-200 hover:scale-105 transition duration-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href={`/food/${food._id}`}>
                    <img className='w-full h-[220px] object-cover'
                        src={food.image}
                        alt=""
                    />
                </a>
                <div className="p-5">
                    <a href={`/food/${food._id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{food.foodTitle}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{food.description}</p>
                    <span><ProductRatings ratings={food.averageRating} /> ({food.ratingsQuantity}) Reviews</span>
                    <div className='flex justify-between mt-4'>
                        <h1 className='font-bold text-2xl'>${food.price}</h1>
                        <button className='px-3 py-2 bg-primary text-white rounded-3xl border border-primary hover:bg-transparent hover:text-primary transition duration-300 disabled:hover:bg-none disabled:text-white disabled:hover:cursor-not-allowed disabled:bg-red-400' disabled={food.stock === 0 || food.stock === undefined} onClick={() => handleAddToCart(food)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        ))

    }

    return (
        <div className='container mx-auto text-center' id='ourDishesSection'>
            <h1 className='text-7xl text-center font-bold mt-9'>Our Dishes</h1>
            <p className='text-xl'>From classic favorites to innovative new dishes <br /> something for everyone</p>
            <div className=' grid grid-cols-4 gap-5 mt-8'>
                {content}
            </div>
            {page < totalPages ? (
                <button
                    className='mt-4 px-4 py-2 bg-primary text-white rounded-full border border-primary hover:bg-transparent hover:text-primary transition duration-300'
                    onClick={handleLoadMore}
                >
                    Load More
                </button>
            ) : (
                items.length > 0 && <button className='mt-4 px-4 py-2 bg-transparent text-primary rounded-full border border-primary'>No Food for Load</button>
            )}
        </div>
    );
};

export default OurDishes;