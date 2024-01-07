const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8 text-sm">
                {[...Array(totalPages)].map((_, index) => (
                    <li key={index}>
                        <button
                            onClick={() => onPageChange(index + 1)}
                            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${currentPage === index + 1
                                ? 'hover:bg-gray-100 hover:text-gray-700 text-primary font-bold'
                                : 'hover:bg-gray-100 hover:text-gray-700'
                                } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
