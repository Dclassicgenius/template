import './Tab.css';

type TabProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: string[];
};

const Tab = ({ activeTab, setActiveTab, tabs }: TabProps) => {
  return (
    <div className="Tab">
      <ul>
        {tabs?.map((tab) => (
          <li
            className={`${tab === activeTab ? 'active' : ''}  `}
            key={tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
