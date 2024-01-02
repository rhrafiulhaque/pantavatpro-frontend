import { useParams } from 'next/navigation';

const FoodDetails = () => {

    const { foodId } = useParams;
    // const {data:food, isLoading} = useGetFoodsByIdQuery()

    // const [quantity, setQuantity] = useState(1);

    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const handleAddToCart = (_id, productName, quantity, price, img) => {
    //     dispatch(addCart({ _id, productName, price, quantity, img }));
    //     toast.success(`${productName} added to cart`)
    // }
    // const handleBuyNow = async (_id, productName, quantity, price, img) => {
    //     dispatch(addCart({ _id, productName, price, quantity, img }));
    //     navigate('/cart')

    // }

    return (
        <div className='container'>
            <h1>{foodId}</h1>
            {/* <RelatedProducts category={category} /> */}
        </div>
    );
};

export default FoodDetails;