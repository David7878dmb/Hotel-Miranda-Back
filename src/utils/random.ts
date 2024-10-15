const number = (range: { min: number, max: number } = {min: 0, max: 1}, decimals:number=2): number => {
    if (range.min > range.max) {
        throw new Error("Minimum value cannot be greater than maximum value.");
    }
    return (+(range.min + Math.random() * (range.max - range.min)).toFixed(decimals));
};

const boolean = (threshold: number = .5) => {
    if (threshold < 0 || threshold > 1) {
      throw new Error('Threshold must be between 0 and 1');
    }
    return Math.random() > threshold;
  };

export default { number, boolean};