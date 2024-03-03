import { Card } from '@consta/uikit/Card';
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';

import './Card.css';
import Tab from '../Tab/Tab';

import { mockData } from '../data/data';
import LineChart from '../LineChart';
import { useState } from 'react';

const tabs = ['$', '€', '¥'];

const currencyIndicators: { [key: string]: string } = {
  $: 'Курс доллара',
  '€': 'Курс евро',
  '¥': 'Курс юаня',
};

const currencyTexts: { [key: string]: string } = {
  $: 'КУРС ДОЛЛАРА, $/₽',
  '€': 'КУРС ЕВРО, €/₽',
  '¥': 'КУРС ЮАНЯ, ¥/₽',
};

const ChartCard = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const filteredData = mockData.filter(
    (data) => data.indicator === currencyIndicators[activeTab]
  );

  const average = (arr: number[]) => {
    const result = arr.reduce((a, b) => a + b, 0) / arr.length;
    return result.toFixed(1);
  };

  return (
    <Layout direction="column">
      <Text view="secondary">Курс валют</Text>
      <Card className="card">
        <Layout direction="row" className="flex-between">
          <Text size="2xl" weight="bold">
            {currencyTexts[activeTab]}
          </Text>
          <Tab activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
        </Layout>
        <Layout direction="row">
          <Layout flex={4}>
            <LineChart
              key={activeTab}
              data={filteredData}
              currencyName={currencyIndicators[activeTab]}
            />
          </Layout>
          <Layout className="card_info" flex={1}>
            <Layout direction="column">
              <Text size="2xl" view="secondary">
                Среднее за период
              </Text>
              <Text size="5xl" view="caution" weight="medium">
                {average(filteredData.map((data) => data.value))}{' '}
                <Text
                  display="inline"
                  view="secondary"
                  size="3xl"
                  weight="regular"
                >
                  ₽
                </Text>
              </Text>
            </Layout>
          </Layout>
        </Layout>
      </Card>
    </Layout>
  );
};

export default ChartCard;
