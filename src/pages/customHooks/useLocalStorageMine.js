import { useEffect, useState } from "react";

function getVal(key, initialVal) {
    const savedVal = JSON.parse(localStorage.getItem(key))
    if (savedVal) return savedVal;
    if (initialVal instanceof Function) return initialVal();
    return initialVal
}
export default function useLocalStorageMine (key, initialVal) {
    const [value, setValue] = useState(() => {
        return getVal(key, initialVal)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue]
}