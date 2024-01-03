const PrimaryButton = ({ message }) => (
    <button className='px-3 py-2 bg-primary text-white rounded-3xl border border-primary hover:bg-transparent hover:text-primary transition duration-300  '>
        {message}
    </button>
);

export default PrimaryButton;