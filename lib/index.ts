import { convert } from "./convert";

const useJSX: IuseJSX = (html) => {
    return {
        convert: (): IConvert => {
            return convert(html)
        }
    }
}

export default useJSX;