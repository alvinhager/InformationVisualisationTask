import * as React from 'react';
import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import studentData, { Skills, Student } from '../../studentData/StudentData';

interface chart {
    data?: number[]
};

const Chart: React.FunctionComponent<chart> = ({ data = [1, 2, 3, 4, 5] }) => {

    //const data: number[] = [4, 3, 2, 1];
    const canvasHeight = 400;
    const canvasWidth = 1000;
    const scale = 20;

    console.log(data);

    const [color, setColor] = useState('orange');

    const d3Container = React.useRef(null);


    const drawBarchart = (data: number[]): void => {
        console.log(color);
        const svgCanvas = d3.select('.canvas')
            .append('svg')
            .attr('width', canvasWidth)
            .attr('height', canvasHeight)
            .style('border', '1px solid black');

        svgCanvas.selectAll('.rect').data(data).enter()
            .append('rect')
            .attr('width', 40)
            .attr('height', (datapoint: number) => datapoint * 20)
            .attr('fill', color)
            .attr('key', (_, index) => { return index })
            .attr('x', (_, iteration) => iteration * 45)
            .attr('y', (datapoint: number) => { return canvasHeight - datapoint * scale })
            .on('mouseover', () => { setColor('blue') })
            .on('mouseout', () => { setColor('orange') });
    };

    /* The useEffect Hook is for running side effects outside of React,
     for instance inserting elements into the DOM using D3 */
    useEffect(
        () => {
            if (data && d3Container.current) {
                const svg = d3.select(d3Container.current);

                // Bind D3 data
                const update = svg
                    .selectAll('rect')
                    .data(data);

                // Enter new D3 elements
                update.enter()
                    .append('rect')
                    .attr('width', 40)
                    .attr('height', (datapoint: number) => datapoint * 20)
                    .attr('fill', color)
                    .attr('x', (_, iteration) => iteration * 45)
                    .attr('y', (datapoint: number) => { return canvasHeight - datapoint * scale });
                //.on('mouseover', () => { setColor('blue'); });
                //.on('mouseout', () => { setColor('orange'); });


                // Update existing D3 elements
                update
                    .attr('width', 40)
                    .attr('height', (datapoint: number) => datapoint * 20)
                    .attr('fill', color)
                    .attr('x', (_, iteration) => iteration * 45)
                    .attr('y', (datapoint: number) => { return canvasHeight - datapoint * scale });
                //.on('mouseover', () => { d3.selectAll("rect").style("fill", "blue"); });
                //.on('mouseout', () => { d3.selectAll("rect").style("fill", "orange"); });

                // Remove old D3 elements
                update.exit().remove();
            }
        },

        /*
            useEffect has a dependency array (below). It's a list of dependency
            variables for this useEffect block. The block will run after mount
            and whenever any of these variables change. We still have to check
            if the variables are valid, but we do not have to compare old props
            to next props to decide whether to rerender.
        */
        [data, d3Container.current, color])


    return <svg
        onMouseEnter={(event) => { setColor('red'); }}
        onMouseLeave={(event) => { setColor(''); }}
        className="d3-component"
        width={400}
        height={600}
        ref={d3Container}>
    </svg >
};




export default Chart;
