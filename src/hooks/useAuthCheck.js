
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAuth } from "../features/auth/authSlice";

export default function useAuthCheck() {
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);

    let userDetails = '';

    useEffect(() => {
        const accessToken = localStorage?.getItem("accessToken");
        if (accessToken) {
            try {
                const userDetails = jwtDecode(accessToken)
                dispatch(
                    addAuth({ accessToken, userDetails })
                );
            } catch (error) {
                console.log(error);
                localStorage.removeItem("accessToken");
            }
        }
        setAuthChecked(true);
    }, [dispatch, setAuthChecked, userDetails,]);
    return authChecked;
}
