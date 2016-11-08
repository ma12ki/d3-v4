const scores = [
    { name: 'Alice', score: 96 },
    { name: 'Billy', score: 83 },
    { name: 'Cindy', score: 91 },
    { name: 'David', score: 96 },
    { name: 'Emily', score: 88 }
];

const bar = d3.select('.chart')
    .append('svg')
        .attr('width', 225)
        .attr('height', 300)
    .selectAll('rect')
    .data(scores)
    .enter()
        .append('g')
        .attr('transform', (d, i) => `translate(0, ${i*33})`);

bar.append('rect')
    .style('width', d => `${d.score}px`)
    .classed('bar', true)
    .on('mouseover', function(d, i, elements) {
        d3.select(this)
            .call(scaleBar, 2)
            .call(setFill, 'orange');

        d3.selectAll(elements)
            .filter(':not(:hover)')
            .call(fade, 0.5);
    })
    .on('mouseout', function(d, i, elements) {
        d3.select(this)
            .call(scaleBar, 1)
            .call(setFill, 'lightgreen');

        d3.selectAll(elements)
            .call(fade, 1);
    });

bar.append('text')
    .attr('y', 20)
    .text((d) => {
        return d.name;
    });


function scaleBar(selection, scale) {
    selection.style('transform', `scaleX(${scale})`);
}

function fade(selection, opacity) {
    selection.style('fill-opacity', opacity);
}

function setFill(selection, color) {
    selection.style('fill', color);
}