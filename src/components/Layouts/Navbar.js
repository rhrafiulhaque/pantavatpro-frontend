import { resetKeyword, setKeyword } from '@/features/filter/filterSlice';
import useAuth from '@/hooks/useAuth';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import logo from '../../assets/logo.png';
import UserFlip from '../homePage/UserFlip';


const Navbar = () => {
    const { status } = useAuth();
    const [haveUser, setHaveUser] = useState(false)
    const cartFood = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    const scrollToAboutMe = () => {
        animateScroll.scrollTo('homeSection', {
            duration: 800,
            smooth: 'easeInOutQuart',
        });
        animateScroll.scrollTo('ourDishesSection', {
            duration: 800,
            smooth: 'easeInOutQuart',
        });
        animateScroll.scrollTo('categorySection', {
            duration: 800,
            smooth: 'easeInOutQuart',
        });
        animateScroll.scrollTo('menuSection', {
            duration: 800,
            smooth: 'easeInOutQuart',
        });
        animateScroll.scrollTo('feedBackSection', {
            duration: 800,
            smooth: 'easeInOutQuart',
        });
        animateScroll.scrollTo('surveySection', {
            duration: 800,
            smooth: 'easeInOutQuart',
        });
        animateScroll.scrollTo('ReserveTable', {
            duration: 800,
            smooth: 'easeInOutQuart',
        });
    };


    useEffect(() => {
        if (status) {
            setHaveUser(true);
        }

    }, [status])
    return (
        <div className='container mx-auto mt-5 flex justify-between align-middle content-center items-center'>
            <a href="\" onClick={() => dispatch(resetKeyword())}> <Image src={logo} alt="Logo" className='w-20 ' /></a>
            <ul className='flex gap-4 justify-center font-semibold '>
                <li><a className='text-[#F54748] font-bold underline ' href="\">Home</a></li>
                <li><ScrollLink
                    to="ourDishesSection"
                    spy={true}
                    smooth={true}
                    duration={800}
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    activeClass="active" // Add a class for the active link if needed
                >
                    <p className='text-[#A19B9E] cursor-pointer'> Our Dishes</p>
                </ScrollLink></li>
                <ScrollLink
                    to="categorySection"
                    spy={true}
                    smooth={true}
                    duration={800}
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    activeClass="active" // Add a class for the active link if needed
                >
                    <p className='text-[#A19B9E] cursor-pointer'> Category </p>
                </ScrollLink>
                <ScrollLink
                    to="menuSection"
                    spy={true}
                    smooth={true}
                    duration={800}
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    activeClass="active" // Add a class for the active link if needed
                >
                    <p className='text-[#A19B9E] cursor-pointer'> Menues </p>
                </ScrollLink>

            </ul>
            <div>
                <div className='w-[434px] relative flex'>
                    <input onChange={(e) => dispatch(setKeyword(e.target.value))} type="text" placeholder="Search" className=" w-full border border-none rounded-lg p-2 bg-[#F8F2F2] focus:border-[#F68C4B]" />
                    <span className='absolute right-3 top-1 text-lg text-gray-400'>
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </div>
            </div>

            <div className='flex  gap-6 items-center'>
                <Link href={'/cart'} className='text-center text-gray-500   transition relative'>
                    <span className='text-2xl'>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </span>
                    <div className='text-xs leading-3'>Cart</div>
                    <span className='absolute right-0 -top-1 w-5 h-5 rounded-full bg-[#FD3D57] flex items-center justify-center text-white text-xs'>{cartFood.length}</span>

                </Link>
                {
                    haveUser ? <UserFlip /> : <>
                        <button className='px-4 py-2 border border-[#FF5331] rounded-full font-semibold hover:bg-[#FF5331] hover:text-white transition duration-300 '><Link href="/login">Login</Link></button>
                        <Link className='px-4 py-2 border bg-[#FF5331] border-[#FF5331] rounded-full font-semibold text-white hover:text-[#FF5331] hover:bg-transparent transition duration-300' href="/register">Sign Up</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;