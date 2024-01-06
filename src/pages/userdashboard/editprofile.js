import UserDashboardLayout from "@/components/Layouts/UserDashboardLayout";
import Loading from "@/components/shared/Loading";
import { useGetUserByEmailQuery, useUpdateProfileMutation } from "@/features/user/userApi";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { toast } from "react-toastify";

const UserProfile = () => {
  const { user } = useAuth()
  const { data: userDetails, isLoading, isError, refetch: refetchUserDetails, } = useGetUserByEmailQuery(user.email);
  const [updateProfile, { isSuccess, isLoading: updateLoading }] = useUpdateProfileMutation();
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      address: e.target.address.value,
      contactNo: e.target.contactNo.value,
      district: e.target.district.value,
      email: user.email
    }
    await updateProfile(data)
    await refetchUserDetails();
  }

  useEffect(() => {

    if (isSuccess) {
      toast.success(`User Profile Update Successfully`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      refetchUserDetails();
    }

  }, [isSuccess, refetchUserDetails])

  if (isLoading || updateLoading) {
    return <Loading />
  }
  return (
    <>
      <h2 className="font-semibold text-lg text-gray-600 py-5 mt-8">
        Profile Information
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="text-gray-600 mb-2 block">
              Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={userDetails.data.name}
              className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
            />
          </div>
          <div>
            <label className="text-gray-600 mb-2 block">
              Address <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              name="address"
              defaultValue={userDetails.data.address}
              className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
            />
          </div>
          <div>
            <label className="text-gray-600 mb-2 block">
              District <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              name="district"
              defaultValue={userDetails.data.district}
              className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-600 mb-2 block">
                Email<span className="text-primary">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
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
                defaultValue={userDetails.data.contactNo}
                required
                name="contactNo"
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
