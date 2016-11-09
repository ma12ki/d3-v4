const margin = {
    top: 10,
    right: 20,
    bottom: 25,
    left: 25
};

const chartWidth = 425;
const chartHeight = 625;
const width = chartWidth - margin.left - margin.right;
const height = chartHeight - margin.top - margin.bottom;

const svg = d3.select('.chart')
    .append('svg')
        .attr('width', chartWidth)
        .attr('height', chartHeight)
    .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

svg.append('rect')
    .attr('width', width / 2)
    .attr('height', height)
    .style('fill', 'lightblue')
    .style('stroke', 'green');

svg.append('rect')
    .attr('x', width / 2)
    .attr('width', width / 2)
    .attr('height', height)
    .style('fill', 'lightblue')
    .style('stroke', 'green');
