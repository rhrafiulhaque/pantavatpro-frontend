import Image from "next/image";
import logo from "../../assets/logo.png";
const Footer = () => {
    return (
        <footer className="bg-[#FFF7F3] py-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-3">
                    <div>
                        <Image src={logo} alt="logo" className="w-[220px]" />
                        <h1> A Culinary Journey Beyond Taste. Explore a symphony of flavors in a warm and inviting atmosphere. Elevate your dining experience with our signature dishes and unparalleled hospitality.</h1>

                    </div>
                    <div>

                    </div>

                    <div className="flex items-center">
                        <div className="">
                            <h3 className="text-2xl font-bold">Contact Us</h3>
                            <p className="mt-2">123 Street, Dhaka, Bangladesh</p>
                            <p>Email: info@pantavat.com</p>
                            <p>Phone: +123 456 7890</p>
                        </div>
                    </div>
                </div>



                <div className="mt-8 text-center">
                    <p>&copy; 2024 PantaVat. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
