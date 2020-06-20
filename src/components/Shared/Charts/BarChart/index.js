import React, {useEffect} from 'react';
import * as d3 from 'd3';
import T from 'prop-types';
import {withFauxDOM} from 'react-faux-dom';

const BarChart = (props) => {
        const {connectFauxDOM, animateFauxDOM, chart} = props;
        var faux = connectFauxDOM('div', 'chart');

        useEffect(() => {
            var n = 1; // number of layers
            var m = 5; // number of samples per layer
            var layers = d3.stack()
                .keys(d3.range(n))(d3.transpose(d3.range(n)
                    .map(function() {
                        return bumpLayer(m, 0.1);
                    })));

            var yStackMax = d3.max(layers, function(layer) {
                return d3.max(layer, function(d) {
                    return d[1];
                });
            });
            var margin = {top: 40, right: 10, bottom: 20, left: 10};
            var width = 500 - margin.left - margin.right;
            var height = 400 - margin.top - margin.bottom;
            var x = d3.scaleBand()
                .domain(d3.range(m))
                .rangeRound([0, width])
                .padding(0.08);

            var y = d3.scaleLinear()
                .domain([yStackMax, 0])
                .range([height, 0]);

            var color = d3.scaleLinear()
                .domain([0, n - 1])
                .range(['#C8C0FF', '#C8C0FF']);

            var xAxis = d3.axisBottom(x)
                .tickSize(0)
                .tickPadding(6);

            var _svg = d3.select(faux)
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', `translate(${margin.left},${margin.top})`);

            var layer = _svg.selectAll('.layer')
                .data(layers)
                .enter()
                .append('g')
                .attr('class', 'layer')
                .style('fill', function(d, i) {
                    return color(i);
                });

            var rect = layer.selectAll('rect')
                .data(function(d) {
                    return d;
                })
                .enter()
                .append('rect')
                .attr('x', function(d, i) {
                    return x(i);
                })
                .attr('y', height)
                .attr('width', x.bandwidth())
                .attr('height', 0);

            rect.transition()
                .delay(function(d, i) {
                    return i * 10;
                })
                .attr('y', function(d) {
                    return height - y(d[1]);
                })
                .attr('height', function(d) {
                    return y((d[1] - d[0]));
                });

            animateFauxDOM(800);

            // eslint-disable-next-line prefer-reflect
            _svg.append('g')
                .attr('class', 'x axis')
                .attr('transform', `translate(0,${height})`)
                .call(xAxis);

            function bumpLayer(_n, o) {
                function bump(a) {
                    var _x = 1 / (0.1 + Math.random());
                    var _y = 2 * Math.random() - 0.5;
                    var z = 10 / (0.1 + Math.random());
                    for(var i = 0; i < _n; i++) {
                        var w = (i / n - _y) * z;
                        a[i] += _x * Math.exp(-w * w);
                    }
                }

                var a = [];
                var i;
                for(i = 0; i < _n; ++i) a[i] = o + o * Math.random();
                for(i = 0; i < 5; ++i) bump(a);
                return a.map(function(d) {
                    return Math.max(0, d);
                });
            }
        }, []);

        return <React.Fragment>
            {chart}
        </React.Fragment>;
    }
;

BarChart.propTypes = {
    connectFauxDOM: T.any,
    animateFauxDOM: T.any,
    chart: T.any
};

export default withFauxDOM(BarChart);
