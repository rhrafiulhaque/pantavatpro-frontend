import Image from 'next/image';
import rice from '../../assets/img/r2.png';
import PrimaryButton from '../PrimaryButton';
import ProductRatings from '../productRatings';

const FullMenu = () => {
    return (
        <div className='container mx-auto text-center'>
            <h1 className='text-7xl text-center font-bold mt-9'>Full Menu</h1>
            <p className='text-xl'>From classic favorites to innovative new dishes, our menu has <br /> something for everyone</p>

            <div className="flex items-center justify-center mt-10 gap-24 text-center text-3xl  ">
                <h1 className='font-quicksand font-bold'>BreakFast</h1>
                <h1 className='font-quicksand font-bold text-primary'>Launch</h1>
                <h1 className='font-quicksand font-bold'>Dinner</h1>
            </div>

            <div className=' grid grid-cols-4 gap-5 mt-8'>

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image src={rice} alt='picture' />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chicken Biriyani</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Aromatic spices, tenderr chicken and fragrant rice - our biryaini has it all</p>
                        <span><ProductRatings ratings={5} /> (600) Reviews</span>
                        <div className='flex justify-between mt-4'>
                            <h1 className='font-bold text-2xl'>$9.90</h1>
                            <PrimaryButton message={'Order Now'} />


                        </div>
                    </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image src={rice} alt='picture' />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chicken Biriyani</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Aromatic spices, tenderr chicken and fragrant rice - our biryaini has it all</p>
                        <span><ProductRatings ratings={5} /> (600) Reviews</span>
                        <div className='flex justify-between mt-4'>
                            <h1 className='font-bold text-2xl'>$9.90</h1>
                            <PrimaryButton message={'Order Now'} />


                        </div>
                    </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image src={rice} alt='picture' />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chicken Biriyani</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Aromatic spices, tenderr chicken and fragrant rice - our biryaini has it all</p>
                        <span><ProductRatings ratings={5} /> (600) Reviews</span>
                        <div className='flex justify-between mt-4'>
                            <h1 className='font-bold text-2xl'>$9.90</h1>
                            <PrimaryButton message={'Order Now'} />


                        </div>
                    </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image src={rice} alt='picture' />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chicken Biriyani</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Aromatic spices, tenderr chicken and fragrant rice - our biryaini has it all</p>
                        <span><ProductRatings ratings={5} /> (600) Reviews</span>
                        <div className='flex justify-between mt-4'>
                            <h1 className='font-bold text-2xl'>$9.90</h1>
                            <PrimaryButton message={'Order Now'} />


                        </div>
                    </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image src={rice} alt='picture' />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chicken Biriyani</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Aromatic spices, tenderr chicken and fragrant rice - our biryaini has it all</p>
                        <span><ProductRatings ratings={5} /> (600) Reviews</span>
                        <div className='flex justify-between mt-4'>
                            <h1 className='font-bold text-2xl'>$9.90</h1>
                            <PrimaryButton message={'Order Now'} />


                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default FullMenu;