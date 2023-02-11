import { createElement } from 'react';
import { v4 as uuid } from "uuid"
import { getNodes } from "./getNodes";

const camelCase = (str: string) => {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}
export const convert: IConvert = (domStr, props) => {

    const nodes: any = typeof domStr === 'string' ? getNodes(domStr) : domStr;

    const JSXNodes: any = [];
    let attributesObj: any = {}
    for (const node of nodes) {
        let { attributes, localName: tag, childNodes, nodeValue }: HTMLElement = node

        attributesObj.key = uuid().slice(0, 4)

        if (attributes) {
            Array.from(attributes).forEach((attr: any) => {

                let attrName = attr.name

                if (attrName.includes('-')) {
                    attrName = camelCase(attrName)
                }

                switch (attrName) {
                    case 'style':
                        const style = JSON.parse(attr.nodeValue.substring(1, attr.nodeValue.length - 1))
                        attributesObj.style = style;
                        break;
                    case 'classname':
                        console.log(attr.nodeValue)
                        attributesObj.className = attr.nodeValue
                        break;
                    default:
                        attributesObj[attrName] = attr.nodeValue;
                        break;
                }
            })
        }

        if (tag) {
            const JSXElement = createElement(tag, attributesObj, childNodes ? convert(childNodes, props) : [])
            JSXNodes.push(JSXElement)
        }
        if (!tag) {

            // const key = nodeValue?.substring(nodeValue.indexOf('[') + 1, nodeValue.indexOf(']'))
            // let value: string | null | undefined = nodeValue
            // if (key && props[key]) {
            //     value = value?.replace(`[${key}]`, props[key])
            // }
            JSXNodes.push(nodeValue)
        }
    }

    return JSXNodes;
}