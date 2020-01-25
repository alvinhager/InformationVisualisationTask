import * as React from 'react';
import { useEffect } from 'react';
import * as d3 from 'd3';
import classes from './SkillBar.module.scss';

interface SkillBar {
    fractionCovered?: number;
    lengthOfBar?: number;
    heightOfBar?: number;
    label?: string;
    colour?: string;
};

const SkillBar: React.FunctionComponent<SkillBar> = ({
    fractionCovered = 1, lengthOfBar = 40, heightOfBar = 10, label = 'Label', colour = 'orange' }) => {

    const d3Container = React.useRef(null);

    let divStyle = {
        height: `${heightOfBar}px`, width: `${lengthOfBar}px`, backgroundColor: '#758184', display: 'block', margin: 'auto',
        borderRadius: '1px 1px'
    };

    //divStyle = { height: '100%', width: '100%', backgroundColor: 'black' };

    useEffect(
        () => {
            if (d3Container.current) {

                const svg = d3.select(d3Container.current);

                // Bind D3 data
                const update = svg.selectAll('rect').data([fractionCovered]);

                // Enter new D3 elements
                update.enter()
                    .append('rect')
                    .attr('width', Math.floor((fractionCovered) * lengthOfBar) + 'px')
                    .attr('height', heightOfBar + 'px')
                    .attr('fill', colour)
                    .attr('rx', '1');


                // Update existing D3 elements
                update
                    .attr('width', Math.floor((fractionCovered) * lengthOfBar) + 'px')
                    .attr('height', heightOfBar + 'px')
                    .attr('fill', colour)
                    .attr('rx', '1');

                // Remove old D3 elements
                update.exit().remove();
            }
        },

    )

    return <div style={divStyle}>
        <svg
            ref={d3Container}>
        </svg>
    </ div >

};

export default SkillBar;