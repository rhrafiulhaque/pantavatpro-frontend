import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../homePage/Footer';
import Loading from '../shared/Loading';
import Navbar from './Navbar';

const CartLayout = ({ children }) => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true)
    const { status, user } = useAuth()

    useEffect(() => {
        if ((!status && user?.role !== 'user') || (!status && user?.role !== 'admin')) {
            router.push('/login')
        }
        setIsLoading(false)
    }, [router, status, user?.role])

    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default CartLayout;