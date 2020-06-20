import React from 'react';
import {ArgumentAxis, BarSeries, Chart, Legend, ValueAxis,} from '@devexpress/dx-react-chart-material-ui';
import {withStyles} from '@material-ui/core/styles';
import {Animation, Stack} from '@devexpress/dx-react-chart';
import service from './data';
import T from 'prop-types';

const legendStyles = () => ({
    root: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
    },
});
const legendRootBase = ({classes, ...restProps}) => (
    <Legend.Root {...restProps} className={classes.root}/>
);

legendRootBase.propTypes = {
    classes: T.object
};

const Root = withStyles(legendStyles, {name: 'LegendRoot'})(legendRootBase);
const legendLabelStyles = () => ({
    label: {
        whiteSpace: 'nowrap',
    },
});
const legendLabelBase = ({classes, ...restProps}) => (
    <Legend.Label className={classes.label} {...restProps} />
);

legendLabelBase.propTypes = {
    classes: T.object
};
const Label = withStyles(legendLabelStyles, {name: 'LegendLabel'})(legendLabelBase);


const StackBarChart = () => <React.Fragment>
        <Chart
            data={service.dataSource()}
        >
            <ArgumentAxis/>
            <ValueAxis

            />

            <BarSeries
                name="Pending"
                valueField="hydro"
                argumentField="country"
            />
            <BarSeries
                name="In Progress"
                valueField="oil"
                argumentField="country"
            />
            <BarSeries
                name="Resolved"
                valueField="gas"
                argumentField="country"
            />
            <BarSeries
                name="Other"
                valueField="coal"
                argumentField="country"
            />
            <Animation/>
            <Legend position="top" rootComponent={Root} labelComponent={Label}/>
            <Stack
                stacks={[
                    {series: ['Pending', 'In Progress', 'Resolved', 'Other']},
                ]}
            />
        </Chart>
    </React.Fragment>
;

export default StackBarChart;
