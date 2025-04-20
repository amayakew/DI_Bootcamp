// The function should return true if the value is one of the allowed types; otherwise, it should return false. 
// Demonstrate its usage by validating variables with different types.

const validateUnionType = (value: any, allowedTypes: string[]): boolean => {
    if (allowedTypes.includes(typeof value)){
        return true;
    }
    return false;
};

console.log(validateUnionType(5, ['string', 'number', 'boolean']));
console.log(validateUnionType(['cat','dog'], ['string', 'number', 'boolean']));