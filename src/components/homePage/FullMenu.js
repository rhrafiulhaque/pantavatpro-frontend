/* eslint-disable @next/next/no-img-element */
import { useGetFoodsByMenuQuery } from '@/features/food/foodApi';
import { useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import ProductRatings from '../productRatings';
import Loading from '../shared/Loading';

const FullMenu = () => {
    let content = null
    const [menu, setMenu] = useState('Breakfast')
    const { data: foods, isLoading, isError, error, } = useGetFoodsByMenuQuery(menu);


    if (isLoading) {
        return <Loading />
    }

    if (!isLoading && isError) {
        content = <div className='text-center flex items-center'> <p className='text-red-500 font-semibold'>{error?.data?.message}</p></div>
    }
    if (!isLoading && !isError && foods?.data?.length === 0) {
        content = <p className='text-red-500 font-semibold'>There have no Foods </p>
    }
    if (!isLoading && !isError && foods?.data?.length > 0) {
        content = foods.data.map((food) => (
            <div key={food.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className='w-full h-[250px] object-fill ' src={food.image} alt="Image" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{food.foodTitle}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{food.description}</p>
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
            <h1 className='text-7xl text-center font-bold mt-9'>Full Menu</h1>
            <p className='text-xl'>From classic favorites to innovative new dishes, our menu has <br /> something for everyone</p>

            <div className="flex items-center justify-center mt-10 gap-24 text-center text-3xl  ">
                <h1 onClick={() => setMenu('Breakfast')} className={menu === 'Breakfast' ? 'font-quicksand font-bold text-primary cursor-pointer ' : 'font-quicksand font-bold cursor-pointer '}>BreakFast</h1>
                <h1 onClick={() => setMenu('Launch')} className={menu === 'Launch' ? 'font-quicksand font-bold text-primary cursor-pointer ' : 'font-quicksand font-bold  cursor-pointer'}>Launch</h1>
                <h1 onClick={() => setMenu('Dinner')} className={menu === 'Dinner' ? 'font-quicksand font-bold text-primary  cursor-pointer' : 'font-quicksand font-bold  cursor-pointer'}>Dinner</h1>
                <h1 onClick={() => setMenu('Snacks')} className={menu === 'Snacks' ? 'font-quicksand font-bold text-primary cursor-pointer ' : 'font-quicksand font-bold  cursor-pointer'}>Snacks</h1>

            </div>

            <div className=' grid grid-cols-4 gap-5 mt-8'>

                {content}

            </div>



        </div>
    );
};

export default FullMenu;