/* eslint-disable @next/next/no-html-link-for-pages */
import { removeFromLocalStorage } from "@/utils/local-storage";
import {
    faBowlFood,
    faCalculator,
    faGift,
    faList,
    faLock,
    faRectangleList,
    faStar,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../assets/img/avatar.png";

const AdminSidebar = () => {
    const logOut = () => {
        removeFromLocalStorage('accessToken')
    }

    return (
        <div className="bg-[#F4F4F6] rounded-xl">
            <div className="flex items-center flex-col space-y-2 pt-8 border-b-slate-700">
                <Image src={avatar} alt="avatar" className="w-16" />
                <h1 className=" font-semibold text-2xl ">Admin</h1>
            </div>
            <div className="grid grid-cols-1 pl-8 pt-8 ">
                <Link href="/admin" className="flex gap-4 items-center mt-4  ">
                    <FontAwesomeIcon
                        icon={faCalculator}
                        className="p-4 rounded-full bg-[#F3E6EC] text-[#ED0027]"
                    />
                    <h1>Dashboard</h1>
                </Link>
                <Link
                    href="/admin/editprofile"
                    className="flex gap-4 items-center mt-4  "
                >
                    <FontAwesomeIcon
                        icon={faUser}
                        className="p-4 rounded-full bg-[#F3E6EC] text-[#ED0027]"
                    />
                    <h1>Edit Profile</h1>
                </Link>
                <Link
                    href="/admin/addfood"
                    className="flex gap-4 items-center mt-4  "
                >
                    <FontAwesomeIcon
                        icon={faBowlFood}
                        className="p-4 rounded-full bg-[#F3E6EC] text-[#ED0027]"
                    />
                    <h1>Add Food</h1>
                </Link>
                <Link
                    href="/admin/foodlist"
                    className="flex gap-4 items-center mt-4  "
                >
                    <FontAwesomeIcon
                        icon={faRectangleList}
                        className="p-4 rounded-full bg-[#F3E6EC] text-[#ED0027]"
                    />
                    <h1>FoodList</h1>
                </Link>
                <Link
                    href="/admin/addcategory"
                    className="flex gap-4 items-center mt-4  "
                >
                    <FontAwesomeIcon
                        icon={faList}
                        className="p-4 rounded-full bg-[#F3E6EC] text-[#ED0027]"
                    />
                    <h1>Add Category</h1>
                </Link>
                <Link href="/admin/allorders" className="flex gap-4 items-center mt-4  ">
                    <FontAwesomeIcon
                        icon={faGift}
                        className="p-4 rounded-full bg-[#F3E6EC] text-[#ED0027]"
                    />
                    <h1>All Orders</h1>
                </Link>
                <a href="/admin/reviewlist" className="flex gap-4 items-center mt-4  ">
                    <FontAwesomeIcon
                        icon={faStar}
                        className="p-4 rounded-full bg-[#F3E6EC] text-[#ED0027]"
                    />
                    <h1>All Reviews</h1>
                </a>
                <a href="/" onClick={logOut} className="flex gap-4 items-center mt-4  ">
                    <FontAwesomeIcon
                        icon={faLock}
                        className="p-4 rounded-full bg-[#F3E6EC] text-[#ED0027]"
                    />
                    Logout
                </a>
            </div>
        </div>
    );
};

export default AdminSidebar;
