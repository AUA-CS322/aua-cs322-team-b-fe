import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const SignInForm = ({ loading, onFinish }) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();
  
  // To disable/enable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Username/Email is required!' }]}>
        <Input prefix={<UserOutlined />} placeholder="Username/Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Password is required!' }]}>
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type="primary"
            shape="round"
            htmlType="submit"
            loading={loading}
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }>
            Sign In
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
