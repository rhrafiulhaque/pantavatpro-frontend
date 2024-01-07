/* eslint-disable @next/next/no-img-element */
import AdminDasboardLayout from '@/components/Layouts/AdminDashboardLayout';
import Loading from '@/components/shared/Loading';
import Pagination from '@/components/shared/Pagination';
import { useGetFoodsQuery } from '@/features/food/foodApi';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const FoodList = () => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limitPerPage = 10;

    const { data: foodList, isLoading } = useGetFoodsQuery({ page, limit: limitPerPage })

    useEffect(() => {
        if (foodList) {
            setTotalPages(Math.ceil(foodList?.meta?.total / limitPerPage));
        }
    }, [foodList]);



    const handlePageChange = (newPage) => {
        setPage(newPage);
    };


    if (isLoading) {
        return <Loading />
    }
    if (!foodList || foodList.data.length === 0) {
        return <p>No foods found.</p>;
    }

    return (
        <div>
            {
                foodList.data.map((food, i) => (

                    <div key={food.id} className=' my-5 py-5 px-4  shadow'>

                        <table className=' hidden lg:inline-table w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                            <thead className="  text-md text-gray-700  bg-gray-50 ">
                                <tr className=''>
                                    <th scope='col' className="px-6 py-3"></th>
                                    <th scope='col' className="px-6 py-3">Image</th>
                                    <th scope='col' className="px-6 py-3">Product Name</th>
                                    <th scope='col' className="px-6 py-3">Category</th>
                                    <th scope='col' className="px-6 py-3">Meal</th>
                                    <th scope='col' className="px-6 py-3">Stock</th>
                                    <th scope='col' className="px-6 py-3">Price</th>
                                    <th scope='col' className="px-6 py-3">Total Sold</th>
                                    <th scope='col' className="px-6 py-3">Product Added</th>
                                    <th scope='col' className="px-6 py-3">Edit Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className=" px-6 py-4">{i + 1} </td>
                                    <td className=" px-6 py-4"><img className='w-10 h-10' src={food.image} alt="image" /></td>
                                    <td className=" px-6 py-4">{food.foodTitle} </td>
                                    <td className=" px-6 py-4">{food.category} </td>
                                    <td className=" px-6 py-4">{food.meal} </td>
                                    <td className=" px-6 py-4">{food.stock} </td>
                                    <td className=" px-6 py-4">{food.price} </td>
                                    <td className=" px-6 py-4">{food.sellsCount} </td>
                                    <td className=" px-6 py-4">{new Date(food.createdAt).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })} </td>
                                    <td className=" px-6 py-4">
                                        <div className='flex space-x-4'>
                                            <a href={`/admin/editfood/${food._id}`}> <FontAwesomeIcon className='text-2xl hover:text-primary duration-300 transition cursor-pointer' icon={faEdit} /></a>
                                            <FontAwesomeIcon className='text-2xl hover:text-primary duration-300 transition cursor-pointer' icon={faTrash} />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))
            }
            <Pagination totalPages={totalPages} currentPage={page} onPageChange={handlePageChange} />
        </div>
    );
};

export default FoodList;

FoodList.getLayout = function getLayout(page) {
    return <AdminDasboardLayout>{page}</AdminDasboardLayout>;
};
