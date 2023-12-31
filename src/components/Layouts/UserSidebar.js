import {
  faCalculator,
  faGift,
  faLock,
  faStar,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../assets/img/avatar.png";

const UserSidbar = () => {
  return (
    <div className="bg-[#F4F4F6] rounded-xl">
      <div className="flex items-center flex-col space-y-2 pt-8 border-b-slate-700">
        <Image src={avatar} alt="avatar" className="w-16" />
        <h1 className=" font-semibold text-2xl ">David Warrior</h1>
      </div>
      <div className="grid grid-cols-1 pl-8 pt-8 ">
        <Link href="/userdashboard" className="flex gap-4 items-center mt-4  ">
          <FontAwesomeIcon
            icon={faCalculator}
            className="p-4 rounded-full bg-[#F3E6EC] text-[#ED0027]"
          />
          <h1>Dashboard</h1>
        </Link>
        <Link
          href="/userdashboard/editprofile"
          className="flex gap-4 items-center mt-4  "
        >
          <FontAwesomeIcon
            icon={faUser}
            className="p-4 rounded-full bg-[#F3E6EC] text-[#ED0027]"
          />
          <h1>Edit Profile</h1>
        </Link>
        <a href="" className="flex gap-4 items-center mt-4  ">
          <FontAwesomeIcon
            icon={faGift}
            className="p-4 rounded-full bg-[#F3E6EC] text-[#ED0027]"
          />
          <h1>Orders</h1>
        </a>
        <a href="" className="flex gap-4 items-center mt-4  ">
          <FontAwesomeIcon
            icon={faStar}
            className="p-4 rounded-full bg-[#F3E6EC] text-[#ED0027]"
          />
          <h1>Reviews</h1>
        </a>
        <a href="" className="flex gap-4 items-center mt-4  ">
          <FontAwesomeIcon
            icon={faLock}
            className="p-4 rounded-full bg-[#F3E6EC] text-[#ED0027]"
          />
          <h1>Logout</h1>
        </a>
      </div>
    </div>
  );
};

export default UserSidbar;
