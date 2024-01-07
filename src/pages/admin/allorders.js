import AdminDasboardLayout from '@/components/Layouts/AdminDashboardLayout';
import Loading from '@/components/shared/Loading';
import Pagination from '@/components/shared/Pagination';
import { useGetAllOrdersQuery, useUpdateDeliveryStatusMutation } from '@/features/order/orderApi';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const OrderList = () => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [items, setItems] = useState([]);
    const limitPerPage = 10;

    const { data: orderList, isLoading } = useGetAllOrdersQuery({ page, limit: limitPerPage })
    console.log(orderList)
    const [updateDeliveryStatus, { isLoading: updateLoading, isSuccess }] = useUpdateDeliveryStatusMutation()

    const changeDeliveryStatus = (e, user) => {
        const deliveryStatus = e.target.value;
        const id = user._id
        const email = user.email
        updateDeliveryStatus({ deliveryStatus, email, id })
    }

    useEffect(() => {
        if (orderList) {
            setTotalPages(Math.ceil(orderList?.meta?.total / limitPerPage));
            setItems((prevItems) => [...prevItems, ...orderList.data]);
        }
    }, [orderList]);


    useEffect(() => {
        if (isSuccess) {
            toast.success("Delivery Status Changed")
        }
    }, [isSuccess])

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };


    if (isLoading || updateLoading) {
        return <Loading />
    }
    if (!orderList || orderList.data.length === 0) {
        return <p>No orders found.</p>;
    }

    return (
        <div>
            {
                orderList.data.map((order) => (

                    <div key={order.id} className=' my-5 py-5 px-4  shadow'>

                        <table className=' hidden lg:inline-table w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                            <thead className="  text-md text-gray-700  bg-gray-50 ">
                                <tr className=''>
                                    <th scope='col' className="px-6 py-3">Order Number</th>
                                    <th scope='col' className="px-6 py-3">Purchased</th>
                                    <th scope='col' className="px-6 py-3">Quanity</th>
                                    <th scope='col' className="px-6 py-3">Total</th>
                                    <th scope='col' className="px-6 py-3">Paid Status</th>
                                    <th scope='col' className="px-6 py-3">Delivery Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className=" px-6 py-4">{order._id} </td>
                                    <td className=" px-6 py-4">{new Date(order.createdAt).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })} </td>
                                    <td className=" px-6 py-4">x{order.food_items.reduce((acc, food) => acc + food.quantity, 0)} </td>
                                    <td className=" px-6 py-4">${order.food_items.reduce((acc, food) => acc + food.price * food.quantity, 0)} </td>
                                    <td className=" px-6 py-4">{order.isPaid === true ? 'Paid' : 'Unpaid'} </td>
                                    <td className="">
                                        <select name="dlvsts" onChange={(e) => changeDeliveryStatus(e, order)} className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                                            <option selected={order.deliveryStatus === 'Sumiteed'} value="Sumiteed">Sumiteed</option>
                                            <option selected={order.deliveryStatus === 'Processing'} value="Processing" >Processing</option>
                                            <option selected={order.deliveryStatus === 'Ongoing'} value="Ongoing">Ongoing</option>
                                            <option selected={order.deliveryStatus === 'Delivered'} value="Delivered">Delivered</option>
                                        </select> </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className='lg:hidden block'>
                            <h1 className='font-semibold'>{order._id}</h1>
                            <p>Order Date- {new Date(order.createdAt).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}</p>
                            <p className=""><span className='font-semibold'>Quantity- </span>x{order.food_items.reduce((acc, food) => acc + food.quantity, 0)} </p>
                            <p className="">${order.food_items.reduce((acc, food) => acc + food.price * food.quantity, 0)} </p>
                            <p className="my-1">{order.isPaid === true ? <span className='bg-green-200 p-1'>Paid </span> : <span className='bg-red-200 p-1'>Unpaid </span>} </p>
                            <p className="my-1.5 m"><span className='bg-yellow-200 p-1'>{order.deliveryStatus} </span> </p>
                            <div className='mt-6'>
                                <Link href={`/getorderdetails/${order._id}`} className='border border-primary rounded-sm transition duration-300 h-10 px-4 py-2 bg-transparent text-primary hover:bg-primary hover:text-white'>View Order</Link>
                            </div>
                        </div>



                    </div>
                ))
            }
            <Pagination totalPages={totalPages} currentPage={page} onPageChange={handlePageChange} />
        </div>
    );
};

export default OrderList;

OrderList.getLayout = function getLayout(page) {
    return <AdminDasboardLayout>{page}</AdminDasboardLayout>;
};
