d3.json('data/data.json', (data) => {
    const extent = d3.extent(data, (row) => {
        return row.age;
    });

    const scale = d3.scaleLinear()
        .domain(extent)
        .range([0, 600]);

    const ages = d3.set(data, (row) => {
        return row.age;
    });

    console.log(ages.values());
});
