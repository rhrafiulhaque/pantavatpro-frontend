import UserDashboardLayout from '@/components/Layouts/UserDashboardLayout';
import ProductRatings from '@/components/productRatings';
import Loading from '@/components/shared/Loading';
import { useGetReviewsByUserEmailQuery } from '@/features/reviewratings/reviewApi';
import useAuth from '@/hooks/useAuth';
import { useEffect, useState } from 'react';

const ReviewList = () => {

    const { user } = useAuth()
    const { email } = user


    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [items, setItems] = useState([]);
    const limitPerPage = 10;

    const { data: reviewList, isLoading: reviewListLoading, isError: reviewListIsError } = useGetReviewsByUserEmailQuery({ email, page, limit: limitPerPage })
    console.log(reviewList)
    useEffect(() => {
        if (reviewList) {
            setTotalPages(Math.ceil(reviewList?.meta?.total / limitPerPage));
            // setItems((prevItems) => [...prevItems, ...reviewList.data]);
        }
    }, [reviewList]);
    let content = ""

    if (reviewListLoading) {
        return <Loading />
    }
    if (!reviewListLoading && !reviewListIsError && reviewList.data.length === 0) {
        content = <p className=' text-4xl text-primary text-center'>There Have No any Reviews</p>
    }
    if (!reviewListLoading && !reviewListIsError && reviewList.data.length > 0) {
        content = <>
            <table className=" w-full hidden lg:inline-table">
                <thead className='bg-gray-50 border-b-2 border-gray-200'>
                    <tr>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'></th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Food Title</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Ratings</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Review</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-100'>

                    {
                        reviewList.data.map((rev, i) => {
                            const _id = rev._id
                            return <tr key={rev.id} className='bg-white'>
                                <th>{i + 1}</th>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{rev.food.foodTitle}</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'><ProductRatings key={rev._id} ratings={rev.rating} /></td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{rev.reviewText}</td>

                            </tr>
                        })
                    }

                </tbody>
            </table>
            <div className='lg:hidden block mt-5'>
                {
                    reviewList.data.map((rev, i) => {
                        const _id = rev._id
                        return <div key={rev.id} className='bg-white shadow'>

                            <p className='p-3 text-sm text-gray-700 whitespace-nowrap'><ProductRatings key={rev._id} ratings={rev.rating} /></p>
                            <p className='p-3 text-sm text-gray-700 whitespace-nowrap'>{rev.reviewText}</p>

                        </div>
                    })
                }
            </div>
        </>
    }

    return (

        <div className=' '>
            <h1 className='text-center font-bold py-8 text-4xl border-gray-200 border-2 text-gray-700 whitespace-nowrap'>Review List</h1>
            {content}

        </div>
    );
};

export default ReviewList;

ReviewList.getLayout = function getLayout(page) {
    return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
