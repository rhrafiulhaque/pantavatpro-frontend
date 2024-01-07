/* eslint-disable @next/next/no-img-element */
import { useGetFoodsByIdQuery } from '@/features/food/foodApi';
import { useAddReviewMutation } from '@/features/reviewratings/reviewApi';
import { setRatings } from '@/features/reviewratings/reviewRatingSlice';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loading from '../shared/Loading';
import AddRatingStar from './AddRatingStar';

const AddReviews = () => {
    const rating = useSelector((state) => state.reviews.ratings);
    const { user } = useAuth();
    const [review, setReview] = useState('')
    const router = useRouter()
    const foodId = router.query.foodId
    const { data: foodDetails, isLoading: foodDetailsLoading } = useGetFoodsByIdQuery(foodId)
    const [addReview, { isLoading: reviewLoading, isSuccess: addReviewSuccess, isError, error }] = useAddReviewMutation();

    const dispatch = useDispatch()

    const handleReviewRating = (e) => {
        e.preventDefault()
        const data = {
            userEmail: user.email,
            rating,
            reviewText: review,
            food: foodDetails.data
        }
        console.log(data);
        addReview(data)
        dispatch(setRatings(null))
    }

    useEffect(() => {
        if (isError) {
            toast.error(error.data.message)
        }
    }, [isError, error])

    useEffect(() => {
        if (addReviewSuccess) {
            toast.success("Review Submitted Successfullly")
        }
    }, [addReviewSuccess])
    if (reviewLoading || foodDetailsLoading) {
        return <Loading />
    }
    return (
        <div className=''>
            <div>
                <div>
                    <AddRatingStar />
                </div>
                <form className='mt-6' onSubmit={handleReviewRating} >
                    <div>
                        <div>
                            <label className="text-gray-600 mb-2 block">Write Review <span className="text-primary">*</span></label>
                            <textarea onChange={(e) => setReview(e.target.value)} className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <button className='mt-10 px-3 py-2 border border-primary text-primary hover:text-white hover:bg-primary rounded-md duration-300 transition'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddReviews;