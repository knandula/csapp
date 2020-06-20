import React from 'react';
import {Chart, PieSeries,} from '@devexpress/dx-react-chart-material-ui';
import {Animation} from '@devexpress/dx-react-chart';
import service from './data';

const DonutChart = () => <React.Fragment>
        <Chart
            data={service.data()}
        >
            <PieSeries
                valueField="val"
                argumentField="region"
                innerRadius={0.6}
            />
            <Animation/>
        </Chart>
    </React.Fragment>
;

export default DonutChart;
