import React from 'react';
import Chart from 'react-google-charts';

const RolePieChart = React.forwardRef<any, any>((props, ref) => {
  const { children } = props;

  return (
    <div ref={ref}>
      <Chart
        width={'500px'}
        height={'400px'}
        chartType='PieChart'
        loader={<div>Loading Chart</div>}
        data={[
          ['Activity', 'Percentage'],
          ['Development', 40],
          ['Testing', 60],
        ]}
        options={{
          fontName: 'Rhodium Libre',
          is3D: true,
          backgroundColor: '#f5f5f5',
          fontSize: '18px',
          slices: {
            0: {
              color: '5E3FBE',
              textStyle: { color: 'white', fontSize: 14 },
              offset: 0.1,
            },
            1: {
              color: 'F4F0FD',
              textStyle: { color: 'black', fontSize: 20 },
            },
          },
          pieSliceText: 'label',
          legend: 'none',
        }}
      />
      {children}
    </div>
  );
});

export default RolePieChart;
