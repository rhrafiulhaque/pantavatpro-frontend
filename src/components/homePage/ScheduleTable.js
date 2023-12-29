// ScheduleTable.js
import Image from "next/image";
import Table from "../../../public/reserved.jpg";
import PrimaryButton from "../PrimaryButton";

const ScheduleTable = () => {
    const timeSlots = [
        "10:00 AM - 11:00 AM",
        "11:00 AM - 12:00 PM",
        "12:00 PM - 01:00 PM",
        // Add more time slots as needed
    ];

    return (
        <div className="container mx-auto py-16">
            <div className="grid grid-cols-2">
                <div className="mr-16">
                    <Image src={Table} className="h-full w-full object-cover" alt="Table" />
                </div>

                <div>
                    <h2 className="text-7xl font-bold text-primary mb-4">Book a Table</h2>
                    <p className="text-gray-700 mb-6">Experience a delightful dining experience with us. Reserve a table and enjoy a memorable meal.</p>

                    <form action="#" method="post">
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

                        <PrimaryButton message={'Submit Reservation'} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ScheduleTable;
