import { ReactECharts } from './Echarts/ReactECharts';

interface CurrencyRate {
  date: string;
  month: string;
  indicator: string;
  value: number;
}

type TooltipParams = {
  seriesName: string;
  value: number;
  color: string;
  axisValueLabel: string;
}[];

const LineChart = ({
  data,
  currencyName,
}: {
  data: CurrencyRate[];
  currencyName: string;
}) => {
  const getOption = () => {
    const xAxisData = data.map((item) => item.month);
    const seriesData = data.map((item) => item.value);

    return {
      color: ['#f38e06'],
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#FFFFFF',

        textStyle: {
          color: '#000',
        },
        padding: [5, 10],
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);',
        formatter: function (params: TooltipParams) {
          const param = params[0];
          const date = param.axisValueLabel;
          const value = param.value;
          return (
            `<div style="font-weight: bold; color: #000;">${date}</div>` +
            `<div>` +
            `<span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 10px; height: 10px; background-color: ${param.color};"></span>` +
            `<span style="color: #666; margin-right: 5px;">${currencyName} </span>` +
            `<span style="font-size: 18px; font-weight: bold; color: #000;">${value} ₽</span>` +
            `</div>`
          );
        },
      },
      grid: {
        left: '4%',
        right: '2%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxisData,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          color: '#00203399',
          margin: 20,
        },
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: seriesData,
          type: 'line',
          showSymbol: false,
          name: currencyName,
        },
      ],
    };
  };
  return <ReactECharts option={getOption()} />;
};

export default LineChart;
