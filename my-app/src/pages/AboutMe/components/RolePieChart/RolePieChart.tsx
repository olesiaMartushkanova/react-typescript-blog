import Chart from 'react-google-charts';

const RolePieChart = () => {
  return (
    <Chart
      width={'500px'}
      height={'400px'}
      chartType='PieChart'
      loader={<div>Loading Chart</div>}
      data={[
        ['Role', 'Percentage'],
        ['Tester', 50],
        ['Developer', 50],
      ]}
      options={{
        fontName: 'Rhodium Libre',
        colors: ['5E3FBE', 'F4F0FD'],
        is3D: true,
        backgroundColor: '#f5f5f5',
        fontSize: '18px',
        pieSliceTextStyle: {
          color: 'black',
          fontSize: 19,
        },
        pieSliceText: 'label',
        legend: 'none',
      }}
    />
  );
};

export default RolePieChart;
