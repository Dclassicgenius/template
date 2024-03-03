import ChartCard from './Card/ChartCard';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import './index.css';

function App() {
  return (
    <Theme preset={presetGpnDefault} className="App">
      <ChartCard></ChartCard>
    </Theme>
  );
}

export default App;
