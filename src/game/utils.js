// Skips I, very intelligent
import * as _ from "lodash";

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

const validateCoordinateInternal = (propName, value, componentName) => {
    if (value) {
        const firstCharacterIsValid = /^[a-zA-Z]*$/.test(value[0]);
        const remainderCharactersAreValid = _.isNumber(parseInt(value.substring(1)));

        if (!firstCharacterIsValid || !remainderCharactersAreValid) {
            return new Error(
                `Invalid ${propName} ${value} sent to ${componentName}`
            );
        }
    }
};

export const validateCoordinate = (props, propName, componentName) => {
    validateCoordinateInternal(propName, props[propName], componentName);
};

export const validateCoordinates = (propValue, key, componentName, location, propFullName) => {
    validateCoordinateInternal(propFullName, propValue, componentName);
};