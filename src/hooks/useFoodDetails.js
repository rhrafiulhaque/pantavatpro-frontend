// src/hooks/useFoodDetails.js
import { useGetReviewByFoodIdQuery } from '@/features/reviewratings/reviewApi';
import { useEffect, useState } from 'react';

const useFoodDetails = (foodId) => {
    const [foodDetails, setFoodDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const { data, isError: queryIsError } = useGetReviewByFoodIdQuery(foodId);

    useEffect(() => {
        if (data) {
            setFoodDetails(data?.food?.foodTitle || null);
            setIsLoading(false);
            setIsError(false);
        } else if (queryIsError) {
            setIsLoading(false);
            setIsError(true);
        }
    }, [data, queryIsError]);

    return {
        foodDetails,
        isLoading,
        isError,
    };
};

export default useFoodDetails;
