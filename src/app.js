const margin = {
    top: 10,
    right: 20,
    bottom: 60,
    left: 40
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
    .attr('width', width)
    .attr('height', height)
    .style('fill', 'lightblue')
    .style('stroke', 'green');

const yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0]);

const yAxis = d3.axisLeft(yScale).ticks(5);
svg.call(yAxis);

const xScale = d3.scaleTime()
    .domain([new Date(2016, 0, 1), new Date(2016, 1, 1)])
    .range([0, width]);

const xAxis = d3.axisBottom(xScale)
    .ticks(5)
    .tickSizeInner(10)
    .tickSizeOuter(20)
    .tickPadding(15);
svg
    .append('g')
        .attr('transform', `translate(0, ${height})`)
    .call(xAxis);