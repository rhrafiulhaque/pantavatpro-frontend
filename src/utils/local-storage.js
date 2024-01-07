export const getFromLocalStorage = (key) => {
    if (!key || typeof window === "undefined") {
        return ""
    }

    return localStorage.getItem(key)
}


export const removeFromLocalStorage = (key) => {
    if (!key || typeof window === "undefined") {
        return;
    }

    localStorage.removeItem(key);
};
