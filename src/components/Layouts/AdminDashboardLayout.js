import Footer from '../homePage/Footer';
import AdminSidebar from './AdminSidebar';
import UserNavbar from './UserNavbar';

const AdminDasboardLayout = ({ children }) => {
    return (
        <>
            <UserNavbar />
            <div className='container mx-auto'>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-3'>
                        <AdminSidebar />
                    </div>
                    <div className='col-span-9'>
                        {children}
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
};

export default AdminDasboardLayout;