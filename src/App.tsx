import { useState } from 'react';
import { Tabs, Layout, Typography, ConfigProvider, theme } from 'antd';
import { getFullSchedule } from './data/schedule';
import DayView from './components/DayView';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  const schedule = getFullSchedule();
  const today = new Date().getDay();
  // Map JS Date day (0=Sun, 1=Mon...) to our IDs.
  // 0 (Sun) -> 'sun' (index 6 in our array)
  // 1 (Mon) -> 'mon' (index 0)
  const todayKey = schedule[today === 0 ? 6 : today - 1]?.id || 'mon';
  
  const [activeTab, setActiveTab] = useState(todayKey);

  const items = schedule.map((day) => ({
    key: day.id,
    label: day.dayName,
    children: <DayView dayPlan={day} />,
  }));

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '0 16px',
          background: '#fff',
          borderBottom: '1px solid #f0f0f0' 
        }}>
          <Title level={3} style={{ margin: 0 }}>GymExe</Title>
        </Header>
        <Content style={{ padding: '16px', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
          <Tabs 
            activeKey={activeTab} 
            onChange={setActiveTab} 
            items={items} 
            centered 
            type="card"
          />
        </Content>
        <Footer style={{ textAlign: 'center' }}>GymExe ©{new Date().getFullYear()} Created for You</Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
