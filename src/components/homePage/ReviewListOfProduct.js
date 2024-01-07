import { useGetReviewByFoodIdQuery } from '@/features/reviewratings/reviewApi';
import ProductRatings from '../productRatings';
import Loading from '../shared/Loading';

const ReviewListOfProduct = ({ foodId }) => {
    const { data: reviews, isLoading, isError, error } = useGetReviewByFoodIdQuery(foodId)
    let content = null;
    if (isLoading) {
        return <Loading />
    }
    if (!isLoading && isError) {
        content = <p className='text-red-500 font-semibold'>{error.data.message}</p>
    }
    if (!isLoading && !isError && reviews?.data?.length === 0) {
        content = <p className='text-red-500 font-semibold'>There have no Reviews</p>
    }
    if (!isLoading && !isError && reviews?.data?.length > 0) {
        content = reviews.data.map((review) => (
            <div key={review.id} className='border border-gray-400 p-5 rounded-md mt-5 '>
                <div className='flex items-center'>
                    <ProductRatings ratings={review.rating} />
                    <h1 className='ml-7'>{review.userEmail} </h1>
                </div>
                <p className='mt-5'>{review.reviewText}</p>
            </div>
        ))
    }
    return (
        <div className=' container mx-auto mt-20'>

            {content}
        </div>
    );
};


export default ReviewListOfProduct;