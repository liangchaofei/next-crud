'use client';
import { useState } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import { fetchLatestInvoices } from '@/app/lib/data';

const { Item, useForm } = Form;
export default async function ProTable() {
  const [form] = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const latestInvoices = await fetchLatestInvoices();
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'image_url',
      dataIndex: 'image_url',
      key: 'image_url',
    },
    {
      title: 'operate',
      dataIndex: 'delete',
      key: 'delete',
      render: () => <Button>删除</Button>,
    },
  ];
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-white px-6">
      <Button onClick={() => setIsModalOpen(true)}>新增</Button>
      <Table key="id" dataSource={latestInvoices} columns={columns} />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} name="control-hooks" style={{ maxWidth: 600 }}>
          <Item name="name" label="name" rules={[{ required: true }]}>
            <Input />
          </Item>
        </Form>
      </Modal>
    </div>
  );
}
