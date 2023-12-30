import UserDashboardLayout from "@/components/Layouts/UserDashboardLayout";

const UserProfile = () => {
  return (
    <>
      <h2 className="font-semibold text-lg text-gray-600 py-5 mt-8">
        Profile Information
      </h2>
      <form>
        <div className="space-y-4">
          <div>
            <label className="text-gray-600 mb-2 block">
              Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={"David"}
              className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-600 mb-2 block">
                Gender <span className="text-primary">*</span>
              </label>
              <select
                name="gender"
                id=""
                required
                className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
              >
                <option value="">Select Option</option>
                {/* <option value="Male" selected={userDetails?.user?.gender === 'Male'}>Male</option>
                                    <option value="Female" selected={userDetails?.user?.gender === 'Female'}>Female</option> */}
                <option value="Female">Female</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-600 mb-2 block">
                Email<span className="text-primary">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={"abcd@gmail.com"}
                disabled
                className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
              />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block required">
                Mobile Number<span className="text-primary">*</span>
              </label>
              <input
                type="number"
                defaultValue={"788888"}
                required
                name="phonenumber"
                className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
              />
            </div>
          </div>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded mt-5 border border-primary hover:bg-transparent hover:text-primary transition">
          Update
        </button>
      </form>
    </>
  );
};

export default UserProfile;

UserProfile.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
