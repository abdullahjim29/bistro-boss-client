import { useEffect, useState } from "react";

const useMenu = () => {
    const [menues, setMenues] = useState();
    useEffect(() => {
        fetch('/menues.json')
        .then(res => res.json())
        .then(data => setMenues(data))
    }, [])

    return menues;
};

export default useMenu;