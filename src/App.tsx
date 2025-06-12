import React from 'react';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './presentation/styles/GlobalStyles';
import { antdTheme } from './presentation/styles/theme';
import Layout from './presentation/components/layout/Layout';
import Home from './presentation/pages/Home';
import Dashboard from './presentation/pages/Dashboard';

// Styled components theme
const styledTheme = {
  colors: {
    primary: '#1890ff',
    secondary: '#722ed1',
    success: '#52c41a',
    warning: '#fa8c16',
    error: '#ff4d4f',
  },
};

const App: React.FC = () => {
  return (
    <ConfigProvider theme={antdTheme}>
      <ThemeProvider theme={styledTheme}>
        <GlobalStyles />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
