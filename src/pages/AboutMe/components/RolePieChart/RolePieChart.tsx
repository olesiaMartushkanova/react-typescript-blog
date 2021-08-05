import React from 'react';
import Chart from 'react-google-charts';
import { MEDIA_QUERY_SIZE } from '../../../../utils/constants';
import { useMediaQueryHook } from '../../../../utils/hooks/useMediaQuery';

const desktopSizeChartOptions = {
  slices: {
    0: {
      color: '5E3FBE',
      textStyle: { color: 'white', fontSize: 26 },
      offset: 0.1,
    },
    1: {
      color: '#5c5c5c',
      textStyle: { color: 'white', fontSize: 26 },
    },
  },
};

const mobileSizeChartOptions = {
  slices: {
    0: {
      color: '#5E3FBE',
      textStyle: { color: 'white', fontSize: 20 },
      offset: 0.1,
    },
    1: {
      color: '5c5c5c',
      textStyle: { color: 'white', fontSize: 20 },
    },
  },
};

const RolePieChart = React.forwardRef<any, any>((props, ref) => {
  const { children } = props;
  const isPageWide = useMediaQueryHook(MEDIA_QUERY_SIZE.desktop);

  const setPieChartOptions = () => {
    return isPageWide
      ? {
          ...desktopSizeChartOptions,
        }
      : { ...mobileSizeChartOptions };
  };

  const setWidth = isPageWide ? 400 : 300;
  const setHeight = isPageWide ? 400 : 300;

  return (
    <div ref={ref}>
      <Chart
        width={setWidth}
        height={setHeight}
        chartType='PieChart'
        loader={<div>Loading Chart</div>}
        data={[
          ['Activity', 'Percentage'],
          ['Tech', 50],
          ['Soft', 50],
        ]}
        options={{
          ...setPieChartOptions(),
          fontName: 'Rhodium Libre',
          is3D: true,
          backgroundColor: '#f5f5f5',
          pieSliceText: 'label',
          legend: 'none',
        }}
      />
      {children}
    </div>
  );
});

export default RolePieChart;
