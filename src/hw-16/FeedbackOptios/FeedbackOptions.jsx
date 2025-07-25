import { useEffect, useRef } from "react";

function Feedback({ name, options }) {
    const buttonRef = useRef(null);

    useEffect(() => {
        if (options === "good" && buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [options]);

    return (
        <button ref={buttonRef} onClick={name}>
            {options}
        </button>
    );
}

export default Feedback;
