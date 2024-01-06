import { setRatings } from '@/features/reviewratings/reviewRatingSlice';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AddRatingStar = () => {
    const rating = useSelector((state) => state.reviews.ratings);
    const [hover, setHover] = useState(null)
    const dispatch = useDispatch()
    return (
        <div className='mt-20'>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1
                return (
                    <label key={index.id}>
                        <input
                            className='hidden'
                            type='radio'
                            name='rating'
                            value={currentRating}
                            onClick={() => dispatch(setRatings(currentRating))}
                        />
                        <FontAwesomeIcon className='text-3xl cursor-pointer' color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                            icon={faStar} />
                    </label>
                );
            })}
        </div>
    )
};

export default AddRatingStar;