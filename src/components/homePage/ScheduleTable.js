// ScheduleTable.js
import Image from "next/image";
import { useState } from "react";
import Table from "../../../public/reserved.jpg";

const ScheduleTable = () => {
    const timeSlots = [
        "10:00 AM - 11:00 AM",
        "11:00 AM - 12:00 PM",
        "12:00 PM - 01:00 PM",
        // Add more time slots as needed
    ];

    const [toggle, setToggle] = useState(false);

    return (
        <div className="container mx-auto py-16" id="ReserveTable">
            <div className="grid grid-cols-2">
                <div className="mr-16">
                    <Image src={Table} className="h-full w-full object-cover" alt="Table" />
                </div>

                <div>
                    <h2 className="text-7xl font-bold text-primary mb-4">Book a Table</h2>
                    <p className="text-gray-700 mb-6">Experience a delightful dining experience with us. Reserve a table and enjoy a memorable meal.</p>

                    <form >
                        <div className="mb-4">
                            <label htmlFor="guests" className="block text-gray-600 font-bold">Number of Guests</label>
                            <input type="number" id="guests" name="guests" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="date" className="block text-gray-600 font-bold">Date</label>
                            <input type="date" id="date" name="date" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="time" className="block text-gray-600 font-bold">Select Time</label>
                            <select id="time" name="time" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
                                {timeSlots.map((slot, index) => (
                                    <option key={index} value={slot}>{slot}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="meal" className="block text-gray-600 font-bold">Select Meal</label>
                            <select id="meal" name="meal" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
                                <option value="dinner">Dinner</option>
                                <option value="lunch">Lunch</option>
                                <option value="breakfast">Breakfast</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="contact" className="block text-gray-600 font-bold">Contact Number</label>
                            <input type="tel" id="contact" name="contact" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-600 font-bold">Message</label>
                            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                        </div>

                        <button onClick={() => setToggle(!toggle)} className='px-3 py-2 bg-primary text-white rounded-3xl border border-primary hover:bg-transparent hover:text-primary transition duration-300  '>
                            Submit Reservation
                        </button>




                        <div id="popup-modal" tabindex="-1" class={` ${toggle ? ' ' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center`}>
                            <div class="relative p-4 w-full max-w-md max-h-full">
                                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <button type="button" onClick={() => setToggle(!false)} class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                    <div class="p-4 md:p-5 text-center">
                                        <svg class="mx-auto mb-4 text-red-700 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        <h3 class="mb-5 text-lg font-normal text-red-600 dark:text-gray-400">We have not any Free Table right now. Please Try again Later</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>



                </div>
            </div>
        </div>
    );
};

export default ScheduleTable;
