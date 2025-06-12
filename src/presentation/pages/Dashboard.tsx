import React from 'react';
import {
  Row,
  Col,
  Card,
  Statistic,
  Table,
  Progress,
  Tag,
  Space,
  Avatar,
  List,
  Typography,
  Divider
} from 'antd';
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  EyeOutlined
} from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Text } = Typography;

const DashboardContainer = styled.div`
  padding: 24px;
  background: #f5f5f5;
  min-height: 100vh;
`;

const MetricCard = styled(Card)`
  .ant-card-body {
    padding: 20px;
  }
  
  .ant-statistic-title {
    color: #666;
    font-size: 14px;
    margin-bottom: 8px;
  }
  
  .ant-statistic-content {
    color: #1890ff;
  }
`;

const RecentActivity = styled(Card)`
  .ant-list-item {
    padding: 12px 0;
    border-bottom: 1px solid #f0f0f0;
  }
  
  .ant-list-item:last-child {
    border-bottom: none;
  }
`;

const TopProducts = styled(Card)`
  .ant-table-thead > tr > th {
    background: #fafafa;
    font-weight: 600;
  }
`;

const Dashboard: React.FC = () => {
  const metricsData = [
    {
      title: 'Total Revenue',
      value: 112893,
      prefix: '$',
      suffix: '',
      trend: 'up',
      percentage: 11.2,
      icon: <DollarOutlined style={{ color: '#52c41a' }} />
    },
    {
      title: 'Total Orders',
      value: 2847,
      prefix: '',
      suffix: '',
      trend: 'up',
      percentage: 8.7,
      icon: <ShoppingCartOutlined style={{ color: '#1890ff' }} />
    },
    {
      title: 'Active Users',
      value: 1924,
      prefix: '',
      suffix: '',
      trend: 'down',
      percentage: 2.3,
      icon: <UserOutlined style={{ color: '#722ed1' }} />
    },
    {
      title: 'Page Views',
      value: 45621,
      prefix: '',
      suffix: '',
      trend: 'up',
      percentage: 15.4,
      icon: <EyeOutlined style={{ color: '#fa8c16' }} />
    }
  ];

  const topProductsData = [
    {
      key: '1',
      product: 'iPhone 14 Pro',
      category: 'Electronics',
      sales: 1847,
      revenue: '$92,350',
      status: 'trending'
    },
    {
      key: '2',
      product: 'MacBook Air M2',
      category: 'Electronics',
      sales: 1203,
      revenue: '$144,360',
      status: 'stable'
    },
    {
      key: '3',
      product: 'AirPods Pro',
      category: 'Accessories',
      sales: 2156,
      revenue: '$53,900',
      status: 'trending'
    },
    {
      key: '4',
      product: 'iPad Pro',
      category: 'Electronics',
      sales: 892,
      revenue: '$89,200',
      status: 'declining'
    },
    {
      key: '5',
      product: 'Apple Watch',
      category: 'Wearables',
      sales: 1547,
      revenue: '$77,350',
      status: 'stable'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      user: 'John Smith',
      action: 'placed an order',
      item: 'iPhone 14 Pro',
      time: '2 minutes ago',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male&1'
    },
    {
      id: 2,
      user: 'Sarah Johnson',
      action: 'left a review',
      item: 'MacBook Air M2',
      time: '5 minutes ago',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female&2'
    },
    {
      id: 3,
      user: 'Mike Wilson',
      action: 'updated profile',
      item: '',
      time: '12 minutes ago',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male&3'
    },
    {
      id: 4,
      user: 'Emma Davis',
      action: 'made a payment',
      item: 'Order #1247',
      time: '25 minutes ago',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female&4'
    },
    {
      id: 5,
      user: 'Tom Brown',
      action: 'signed up',
      item: '',
      time: '1 hour ago',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male&5'
    }
  ];

  const topProductsColumns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
      render: (text: string) => <Text strong>{text}</Text>
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category'
    },
    {
      title: 'Sales',
      dataIndex: 'sales',
      key: 'sales',
      render: (value: number) => value.toLocaleString()
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
      key: 'revenue',
      render: (text: string) => <Text strong style={{ color: '#52c41a' }}>{text}</Text>
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = 'default';
        if (status === 'trending') color = 'success';
        else if (status === 'declining') color = 'error';
        else if (status === 'stable') color = 'processing';
        
        return <Tag color={color}>{status}</Tag>;
      }
    }
  ];

  return (
    <DashboardContainer>
      <Title level={2} style={{ marginBottom: 24 }}>Dashboard Overview</Title>
      
      {/* Metrics Cards */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {metricsData.map((metric, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <MetricCard>
              <Space align="start" size="middle">
                <div style={{ fontSize: '32px' }}>
                  {metric.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <Statistic
                    title={metric.title}
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    valueStyle={{ fontSize: '24px', fontWeight: 600 }}
                  />
                  <div style={{ marginTop: 8 }}>
                    {metric.trend === 'up' ? (
                      <Text style={{ color: '#52c41a' }}>
                        <ArrowUpOutlined /> {metric.percentage}%
                      </Text>
                    ) : (
                      <Text style={{ color: '#ff4d4f' }}>
                        <ArrowDownOutlined /> {metric.percentage}%
                      </Text>
                    )}
                    <Text style={{ marginLeft: 8, color: '#666' }}>vs last month</Text>
                  </div>
                </div>
              </Space>
            </MetricCard>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]}>
        {/* Top Products Table */}
        <Col xs={24} lg={16}>
          <TopProducts title="Top Performing Products" extra={<Text type="secondary">Last 30 days</Text>}>
            <Table
              dataSource={topProductsData}
              columns={topProductsColumns}
              pagination={false}
              size="middle"
            />
          </TopProducts>
        </Col>

        {/* Recent Activity */}
        <Col xs={24} lg={8}>
          <RecentActivity title="Recent Activity" extra={<Text type="secondary">Live updates</Text>}>
            <List
              dataSource={recentActivities}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={
                      <Space>
                        <Text strong>{item.user}</Text>
                        <Text>{item.action}</Text>
                        {item.item && <Text style={{ color: '#1890ff' }}>{item.item}</Text>}
                      </Space>
                    }
                    description={<Text type="secondary">{item.time}</Text>}
                  />
                </List.Item>
              )}
            />
          </RecentActivity>
        </Col>
      </Row>

      {/* Progress Indicators */}
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} lg={12}>
          <Card title="Monthly Goals Progress">
            <Space direction="vertical" style={{ width: '100%' }} size="large">
              <div>
                <div style={{ marginBottom: 8 }}>
                  <Text>Revenue Goal</Text>
                  <Text style={{ float: 'right' }}>$112,893 / $150,000</Text>
                </div>
                <Progress percent={75} strokeColor="#52c41a" />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>
                  <Text>Orders Goal</Text>
                  <Text style={{ float: 'right' }}>2,847 / 3,500</Text>
                </div>
                <Progress percent={81} strokeColor="#1890ff" />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>
                  <Text>New Customers</Text>
                  <Text style={{ float: 'right' }}>428 / 600</Text>
                </div>
                <Progress percent={71} strokeColor="#722ed1" />
              </div>
            </Space>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="Quick Stats">
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Statistic
                  title="Conversion Rate"
                  value={3.7}
                  suffix="%"
                  valueStyle={{ color: '#52c41a' }}
                  prefix={<ArrowUpOutlined />}
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="Avg. Order Value"
                  value={89.23}
                  prefix="$"
                  valueStyle={{ color: '#1890ff' }}
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="Customer Satisfaction"
                  value={4.8}
                  suffix="/ 5.0"
                  valueStyle={{ color: '#fa8c16' }}
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="Return Rate"
                  value={2.1}
                  suffix="%"
                  valueStyle={{ color: '#ff4d4f' }}
                  prefix={<ArrowDownOutlined />}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </DashboardContainer>
  );
};

export default Dashboard;
