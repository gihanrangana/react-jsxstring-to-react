export const getNodes = (str: string): any[] => {
    const dom: any = new DOMParser().parseFromString(str, 'text/html').body;
    return Array.from(dom.children)
}