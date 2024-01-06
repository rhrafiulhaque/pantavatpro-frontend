import RootLayout from '@/components/Layouts/RootLayout';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const orderCanceled = () => {
    return (
        <div className='flex justify-center text-center align-middle my-7'>
            <div className='space-y-5'>
                <FontAwesomeIcon className='text-3xl text-white font-bold bg-red-400 w-11 h-11 rounded-full p-2' icon={faCheck} />
                <h1 className='text-red-600 uppercase text-2xl font-semibold'>Payment is Unsuccessfull</h1>
                <p className='pb-5'> Please Check your order and Payment after while...</p>
                <Link href={'/'} className=' px-3 py-2 bg-primary text-white border border-primary hover:text-primary hover:bg-transparent rounded-lg uppercase'>Continue Shopping</Link>
            </div>

        </div>
    );
};

export default orderCanceled;

orderCanceled.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
