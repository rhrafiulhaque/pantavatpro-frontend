// components/SurveySection.js
import { faGift, faSmile, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import CountUp from 'react-countup';

const SurveySection = () => {
    useEffect(() => {
        const handleScroll = () => {
            const surveySection = document.getElementById('surveySection');
            const windowHeight = window.innerHeight;

            if (surveySection.getBoundingClientRect().top < windowHeight / 2) {
                document.getElementById('animateCounters').classList.add('counters-animated');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="surveySection" className="bg-white py-16 text-center mt-20">
            <div className="container mx-auto">
                <h2 className="text-7xl font-bold mb-8 ">Our Overviews</h2>
                <p className="text-gray-600 mb-8">Discover the insights from our latest survey and learn what our customers think about our services.</p>
                <div id="animateCounters" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-4 border border-gray-300 rounded-md h-[400px] flex flex-col items-center justify-center ">
                        <FontAwesomeIcon icon={faUtensils} className="text-7xl mb-2 text-primary" />
                        <h3 className="text-7xl text-orange-500 font-bold mb-2">
                            <CountUp start={0} end={1800} duration={2} separator="," />
                            +</h3>
                        <p className='text-3xl'>Food Choices</p>
                    </div>

                    <div className="p-4 border border-gray-300 rounded-md h-[400px] flex flex-col items-center justify-center ">
                        <FontAwesomeIcon icon={faSmile} className="text-7xl mb-2 text-primary" />
                        <h3 className="text-7xl text-orange-500 font-bold mb-2">
                            <CountUp start={0} end={477} duration={2} separator="," />
                            +</h3>
                        <p className='text-3xl'>Happy Customers</p>
                    </div>
                    <div className="p-4 border border-gray-300 rounded-md h-[400px] flex flex-col items-center justify-center ">
                        <FontAwesomeIcon icon={faGift} className="text-7xl mb-2 text-primary" />
                        <h3 className="text-7xl text-orange-500 font-bold mb-2">
                            <CountUp start={0} end={985} duration={2} separator="," />
                            +</h3>
                        <p className='text-3xl'>Deliveries</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SurveySection;
