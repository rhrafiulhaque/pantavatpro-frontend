import { getFromLocalStorage } from '@/utils/local-storage';
import { jwtDecode } from 'jwt-decode';

export default function useAuth() {
    const token = getFromLocalStorage("accessToken");

    if (token) {
        try {
            const user = jwtDecode(token);
            return {
                status: true,
                user
            };
        } catch (error) {
            console.error("Error decoding token:", error);
            return {
                status: false,
                user: {}
            };
        }
    }

    return {
        status: false,
        user: {}
    };
}
