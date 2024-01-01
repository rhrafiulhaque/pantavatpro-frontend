/* eslint-disable @next/next/no-img-element */
import { useGetFoodsQuery } from '@/features/food/foodApi';
import PrimaryButton from '../PrimaryButton';
import ProductRatings from '../productRatings';
import Loading from '../shared/Loading';

const OurDishes = () => {
    let content = null;
    const { data: foods, isLoading, error, isError } = useGetFoodsQuery();
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
        content = foods.data.map((food) => (
            <div key={food.id} class="max-w-sm bg-white border border-gray-200 hover:scale-105 transition duration-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className='w-full h-[220px] object-cover'
                        src={food.image}
                        alt=""
                    />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{food.foodTitle}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{food.description}</p>
                    <span><ProductRatings ratings={5} /> (600) Reviews</span>
                    <div className='flex justify-between mt-4'>
                        <h1 className='font-bold text-2xl'>${food.price}</h1>
                        <PrimaryButton message={'Order Now'} />


                    </div>
                </div>
            </div>
        ))

    }

    return (
        <div className='container mx-auto text-center'>
            <h1 className='text-7xl text-center font-bold mt-9'>Our Dishes</h1>
            <p className='text-xl'>From classic favorites to innovative new dishes <br /> something for everyone</p>


            <div className=' grid grid-cols-4 gap-5 mt-8'>

                {content}


            </div>



        </div>
    );
};

export default OurDishes;