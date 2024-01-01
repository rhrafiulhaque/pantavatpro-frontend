import { getFromLocalStorage } from '@/utils/local-storage';
import { jwtDecode } from 'jwt-decode';

export default function useAuth() {
    const token = getFromLocalStorage("accessToken");
    if (token) {
        const user = jwtDecode(token)
        return {
            status: true,
            user
        }
    }
    return {
        status: false,
        user: {}
    }

}
