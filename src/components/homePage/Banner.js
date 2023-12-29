import Image from 'next/image';
import rice from '../../assets/img/r2.png';

const Banner = () => {
    return (

        < div className='container mx-auto' >
            <div className='flex gap-3 items-center justify-between'>
                <div>
                    <h1 className='font-bold text-[85px] text-['>Food You Love <br /> <span className='text-primary'>Delivered</span> To You</h1>
                    <p>The taste of your food largely depends on the quality of the ingredients. <br /> Use fresh, seasonal produce, and high quality meats and fish</p>
                </div>
                <div>
                    <Image src={rice} alt='rice' />
                </div>
            </div>
        </div >

    );
};

export default Banner;