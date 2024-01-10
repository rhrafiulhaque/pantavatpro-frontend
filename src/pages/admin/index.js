import AdminDasboardLayout from "@/components/Layouts/AdminDashboardLayout";
import {
    faBoxTissue,
    faBoxes,
    faDollar,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminDashboard = () => {
    return (
        <div>
            <div className="py-8">
                <h1 className="text-center text-4xl ">
                    {" "}
                    <FontAwesomeIcon icon={faUser} className="px-2" /> Admin Dashboard
                </h1>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-10">
                <div className="shadow p-10 text-center">
                    <FontAwesomeIcon
                        className="text-7xl border rounded-full border-primary px-5 py-4 my-4 text-primary hover:text-white hover:bg-primary duration-300 transition  "
                        icon={faBoxes}
                    />
                    <h1 className="text-2xl font-bold">0</h1>
                    <p className="text-xl">0</p>
                </div>

                <div className="shadow p-10 text-center">
                    <FontAwesomeIcon
                        className="text-7xl border rounded-full border-primary px-5 py-4 my-4 text-primary hover:text-white hover:bg-primary duration-300 transition  "
                        icon={faDollar}
                    />
                    <h1 className="text-2xl font-bold">$0</h1>
                    <p className="text-xl">Total Spend</p>
                </div>

                <div className="shadow p-10 text-center">
                    <FontAwesomeIcon
                        className="text-7xl border rounded-full border-primary px-5 py-4 my-4 text-primary hover:text-white hover:bg-primary duration-300 transition  "
                        icon={faBoxTissue}
                    />
                    <h1 className="text-2xl font-bold">$0</h1>
                    <p className="text-xl">Products Bought </p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

AdminDashboard.getLayout = function getLayout(page) {
    return <AdminDasboardLayout>{page}</AdminDasboardLayout>;
};
