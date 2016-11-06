const linearScale = d3.scaleLinear()
    .domain([0, 100]) // possible input value range
    .range([0, 666]) // input values will be translated to this range
    .clamp(true); // prevents value overflow

console.log(linearScale(0));
console.log(linearScale(100));
console.log(linearScale(50));
console.log(linearScale(30));
console.log(linearScale(3000));

console.log(linearScale.invert(333)); // translate from output range back to input range
