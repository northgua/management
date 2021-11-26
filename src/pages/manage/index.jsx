import React, { useState } from 'react';
import { Table, Tag, Space ,Button } from 'antd';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';

const dataSource = [
  {
    key: '1',
    name: '充话费1',
    createTime: '2021-09-09',
    endTime: '2021-09-09',
    status: true,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '充话费2',
    createTime: '2021-09-09',
    endTime: '2021-09-09',
    status: false,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '项目名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '到期时间',
    dataIndex: 'endTime',
    key: 'endTime',
  },
  {
    title: '是否完成',
    dataIndex: 'status',
    key: 'status',
    render: (status, record) => (
      <Space>
        {
          status 
          ? <Tag icon={<CheckCircleOutlined />} color="success">
             通过
          </Tag>
          :<Tag icon={<CloseCircleOutlined />} color="error">
             过期
          </Tag>
        }
      </Space>
    )
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
       <Space>
         <Button type="primary" size="small">
          通过
        </Button>
        <Button size="small">
          拒绝
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