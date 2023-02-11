import useJSX from 'react-jsxstring-to-react';
import { useEffect, useState } from "react";

// Example
const jsxString = `<div className="outer">
    <p className="test" style={{"color":"#f00"}}>Your Content</p>
</div>`

function App () {
    const [elements, setElements] = useState([])

    const jsx = useJSX(null)

    useEffect(() => {
        setElements(jsx.convert())
    }, [])

    return (
        <div>
            {elements && elements.map(e => {
                return e;
            })}
        </div>
    )
}

export default App
