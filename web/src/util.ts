

export function trimQuotes(strIn: string): string {

    if (strIn[0] === '"') {
        strIn = strIn.slice(1);
    }

    if (strIn[strIn.length -1] === '"') {
        strIn = strIn.slice(0, -1);
    }

    return strIn;
}