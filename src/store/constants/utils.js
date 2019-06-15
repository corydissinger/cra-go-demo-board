export const genCharArray = (charA, charZ) => {
    let a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);

    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }

    if (a.length === 0) {
        throw new Error(`Unexpected begin [${charA}] and end [${charZ}] characters`);
    }

    return a;
};