import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className='container mx-auto mt-5 flex justify-between align-middle content-center items-center bg-[#0F1217] p-4 rounded-xl'>
            <a href="\"> <Image src={logo} alt="Logo" className='w-20 ' /></a>


            <div>
                <div className='w-[434px] relative flex'>
                    <input type="text" placeholder="Search" className=" w-full border border-none rounded-lg p-2 bg-[#F8F2F2] focus:border-[#F68C4B]" />
                    <span className='absolute right-3 top-1 text-lg text-gray-400'>
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Navbar;