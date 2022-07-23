import React from 'react';
import { NextPage } from 'next';
import Input from '@components/ui/input';
import Form from '@/components/ui/form';

const Test: NextPage = () => {
  const onSubmit = (values: any) => {
    console.log('values', values);
  };

  const initialValues = {};
  const form = Form.useForm({ onSubmit, initialValues });

  return (
    <Form form={form}>
      <Form.Field>
        <Input />
      </Form.Field>
      <Form.Field>
        <Input />
      </Form.Field>
      <Form.Field>
        <Input />
      </Form.Field>
      <Form.Field>
        <Input />
      </Form.Field>
      <Form.Field>
        <Input />
      </Form.Field>
      <Form.Field>
        <Input />
      </Form.Field>
    </Form>
  );
};

export default Test;
