import useAuth from '@/hooks/useAuth';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const UserFlip = () => {
    const { user } = useAuth()

    const [menuFlip, setMenuFlip] = useState(false);




    return (
        <>
            <a className='text-center text-gray-500 hover:text-[#FD3D57] transition relative duration-300' onClick={() => setMenuFlip(!menuFlip)}>
                <span className='text-2xl'>
                    <FontAwesomeIcon icon={faUser} />
                </span>
                <div className='text-xs leading-3'>Admindd</div>

            </a>
            {
                menuFlip && <div className="absolute w-28 right-0 z-10 mt-[170px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div className="py-1" role="none">
                        {
                            (user.role === 'user') && <>
                                <a className="text-gray-700 block px-4 py-2 text-sm hover:text-primary transition" href={`/userdashboard/${user?.email}`} role="menuitem" tabindex="-1" id="menu-item-0">My Profile </a>
                                <a className="text-gray-700 block px-4 py-2 text-sm hover:text-primary transition" href={'/cart'} role="menuitem" tabindex="-1" id="menu-item-1">My Cart</a>
                            </>
                        }
                        {
                            user.role == 'admin' && <>
                                <a className="text-gray-700 block px-4 py-2 text-sm hover:text-primary transition" href={'/admin'} role="menuitem" tabindex="-1" id="menu-item-0">Dashboard</a>
                                <a className="text-gray-700 block px-4 py-2 text-sm hover:text-primary transition" href={'/cart'} role="menuitem" tabindex="-1" id="menu-item-1">My Cart</a>
                            </>
                        }

                        <a className="text-gray-700 block px-4 py-2 text-sm hover:text-primary transition" role="menuitem" tabindex="-1" id="menu-item-2" >Logout</a>

                    </div>
                </div>
            }
        </>




    );
};

export default UserFlip;