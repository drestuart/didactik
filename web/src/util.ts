export function trimQuotes(strIn: string): string {

    if (strIn[0] === '"') {
        strIn = strIn.slice(1);
    }

    if (strIn[strIn.length - 2] === '"') {
        strIn = strIn.slice(0, strIn.length - 2);
    }

    return strIn;
}