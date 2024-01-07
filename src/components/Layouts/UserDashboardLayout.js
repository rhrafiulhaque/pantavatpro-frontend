import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../homePage/Footer';
import Loading from '../shared/Loading';
import UserNavbar from './UserNavbar';
import UserSidbar from './UserSidebar';

const UserDashboardLayout = ({ children }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true)
    const { status, user } = useAuth()

    useEffect(() => {
        if (!status && user?.role !== 'user') {
            router.push('/login')
        }
        setIsLoading(false)
    }, [router, status, user?.role])

    if (isLoading) {
        return <Loading />
    }
    return (
        <>
            <UserNavbar />
            <div className='container mx-auto'>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-3'>
                        <UserSidbar />
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

export default UserDashboardLayout;