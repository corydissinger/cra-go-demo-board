// Skips I, very intelligent
export const genGobanCharArray = (numColumns) => {
    if (numColumns < 1) {
        throw new Error('Please expect more than one column for a standard board...');
    }

    let columnLabels = [];

    for (let i = 65; columnLabels.length < numColumns; ++i) {
        const currentCharacter = String.fromCharCode(i);
        if ('I' !== currentCharacter) {
            columnLabels.push(currentCharacter);
        }
    }

    return columnLabels;
};

export const getCharacterFromOffset = (offset) => {
    if (offset < 8) {
        return String.fromCharCode(offset + 65);
    } else {
        // accounting for I...
        return String.fromCharCode(offset + 66);
    }
};

export const getOffsetFromCharacter = (character) => {
    const originalCharacterCode = character.charCodeAt(0);

    if (originalCharacterCode < 74) {
        return originalCharacterCode - 65;
    } else {
        // this accounts for the 'I' offset
        return originalCharacterCode - 66;
    }
};