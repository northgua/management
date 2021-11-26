import React, { useState } from 'react';
import { Table, Space ,Button } from 'antd';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
       <Space>
         <Button type="primary" size="small">
          通过
        </Button>
        <Button type="primary" size="small" danger>
          废弃
        </Button>
       </Space>
    ),
  },
];

function Home() {
  return (
    <Table dataSource={dataSource} columns={columns} />
  );
}

export default Home;