# React JSXString to React Component

[![npm version](https://img.shields.io/npm/v/react-jsxstring-to-react.svg?style=flat-square)](https://www.npmjs.org/package/react-jsxstring-to-react)
[![ts version](https://badgen.net/badge/icon/Typescript?icon=typescript&label)]()
[![github release](https://badgen.net/github/release/gihanrangana/react-jsxstring-to-react)](https://github.com/gihanrangana/react-jsxstring-to-react)
[![license](https://badgen.net/github/license/micromatch/micromatch)]()
![NPM Downloads](https://img.shields.io/npm/dw/react-jsxstring-to-react)

react-jsxstring-to-react is a plugin for React to generate jsx component using strings. follow this example

`npm install react-jsxstring-to-react`

or

`yarn add react-jsxstring-to-react`

```tsx
const jsxString = `<div className="outer">
    <p className="test" style={{"color":"#f00"}}>Your Content</p>
</div>`

function App () {
    const [elements, setElements] = useState([])

    const jsx = useJSX(jsxString)

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
```

# License
Copyright © 2023 [Gihan Rangana](https://github.com/gihanrangana) Released under the MIT license.