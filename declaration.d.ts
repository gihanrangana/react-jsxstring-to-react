interface IuseJSXReturn {
    convert: IConvert
}

type IuseJSX = (html: string) => IuseJSXReturn

type IProps = {
    [key: string]: string | number
}
type IConvert = (domStr: NodeListOf<ChildNode> | string, props?: IProps) => any