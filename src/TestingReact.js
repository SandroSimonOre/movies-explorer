import { useState } from "react";

const TestingReact = () => {

    const [estado, setEstado] = useState(1);

    const numero = 10;
    if (Math.random > 0.5) {
    // (5 < 10) {
        setEstado(10);
    }

    return (
        <h1>Hello World </h1>
    )

}

export default TestingReact;