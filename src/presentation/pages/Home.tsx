import React from 'react';
import { Card, Typography, Row, Col, Button, Space } from 'antd';
import { DashboardOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

const HomeContainer = styled.div`
  padding: 24px;
  background: #f5f5f5;
  min-height: 100vh;
`;

const WelcomeCard = styled(Card)`
  margin-bottom: 24px;
  text-align: center;
  
  .ant-card-body {
    padding: 48px 24px;
  }
`;

const FeatureCard = styled(Card)`
  height: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Dashboard Analytics',
      description: 'View comprehensive analytics and metrics for your business performance.',
      icon: <DashboardOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
      action: () => navigate('/dashboard'),
    },
  ];

  return (
    <HomeContainer>
      <WelcomeCard>
        <Title level={1}>Welcome to Your Application</Title>
        <Paragraph style={{ fontSize: '18px', color: '#666', marginTop: '16px' }}>
          This is a modern React application built with Ant Design, TypeScript, and Styled Components.
        </Paragraph>
        <Space size="large" style={{ marginTop: '24px' }}>
          <Button 
            type="primary" 
            size="large" 
            onClick={() => navigate('/dashboard')}
            icon={<DashboardOutlined />}
          >
            Go to Dashboard
          </Button>
        </Space>
      </WelcomeCard>

      <Row gutter={[24, 24]}>
        {features.map((feature, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <FeatureCard>
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <div style={{ textAlign: 'center' }}>
                  {feature.icon}
                </div>
                <Title level={4} style={{ textAlign: 'center', margin: 0 }}>
                  {feature.title}
                </Title>
                <Paragraph style={{ textAlign: 'center', color: '#666' }}>
                  {feature.description}
                </Paragraph>
                <Button 
                  type="default" 
                  block 
                  onClick={feature.action}
                  icon={<RightOutlined />}
                >
                  Explore
                </Button>
              </Space>
            </FeatureCard>
          </Col>
        ))}
      </Row>
    </HomeContainer>
  );
};

export default Home;
