import React from 'react';
import Chart from 'react-google-charts';
import { MEDIA_QUERY_SIZE } from '../../../../utils/constants';
import { useMediaQueryHook } from '../../../../utils/hooks/useMediaQuery';

const desktopSizeChartOptions = {
  slices: {
    0: {
      color: '5E3FBE',
      textStyle: { color: 'white', fontSize: 24 },
      offset: 0.1,
    },
    1: {
      color: 'F4F0FD',
      textStyle: { color: 'black', fontSize: 20 },
    },
  },
};

const mobileSizeChartOptions = {
  slices: {
    0: {
      color: '5E3FBE',
      textStyle: { color: 'white', fontSize: 14 },
      offset: 0.1,
    },
    1: {
      color: 'F4F0FD',
      textStyle: { color: 'black', fontSize: 12 },
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
  const setHeight = isPageWide ? 400 : 200;

  return (
    <div ref={ref}>
      <Chart
        width={setWidth}
        height={setHeight}
        chartType='PieChart'
        loader={<div>Loading Chart</div>}
        data={[
          ['Activity', 'Percentage'],
          ['Dev', 40],
          ['Testing', 60],
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
