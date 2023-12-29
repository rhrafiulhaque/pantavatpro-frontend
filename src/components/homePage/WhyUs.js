import Image from 'next/image';

import easyToOrder from "../../assets/img/easyOrder.png";
import fastDelivery from "../../assets/img/fastDelivery.png";
import satiFaction from "../../assets/img/Satisfacetion.png";

const WhyUs = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl text-center font-bold'>Why Choose Us</h1>
            <div className='grid grid-cols-3 mt-14'>
                <div className='text-center'>
                    <Image src={easyToOrder} alt='picture' className='mx-auto' />
                    <h1 className='font-bold text-3xl my-5'>Easy to Order</h1>
                    <p>Delicious food delivered Straight to your door</p>
                </div>

                <div className='text-center'>
                    <Image src={fastDelivery} alt='picture' className='mx-auto' />
                    <h1 className='font-bold text-3xl my-5'>Fast Delivery</h1>
                    <p>No time to wait, no time to waste, Order Now for fast food haste.</p>
                </div>

                <div className='text-center'>
                    <Image src={satiFaction} alt='picture' className='mx-auto' />
                    <h1 className='font-bold text-3xl my-4'>High-Quality Food</h1>
                    <p>Providing a mix of healthy and indulgent choices, customer satisfaction.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;