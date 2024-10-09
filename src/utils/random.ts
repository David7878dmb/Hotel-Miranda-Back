const number = (range: { min: number, max: number } = {min: 0, max: 1}, decimals:number=2): number => {
    if (range.min > range.max) {
        throw new Error("Minimum value cannot be greater than maximum value.");
    }
    return (+(range.min + Math.random() * (range.max - range.min)).toFixed(decimals));
};

export default number;