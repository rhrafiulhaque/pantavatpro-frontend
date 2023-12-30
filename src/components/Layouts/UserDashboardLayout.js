import Footer from '../homePage/Footer';
import UserNavbar from './UserNavbar';
import UserSidbar from './UserSidebar';

const UserDashboardLayout = ({ children }) => {
    return (
        <>
            <UserNavbar/>
            <div className='container mx-auto'>
            <div className='grid grid-cols-12 gap-5'>
                <div className='col-span-3'>
                    <UserSidbar/>
                </div>
                <div className='col-span-9'>
                    {children}
                </div>
            </div>
            </div>
            
            <Footer/>
           
        </>
    );
};

export default UserDashboardLayout;