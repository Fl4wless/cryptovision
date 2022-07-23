import React from 'react';
import { NextPage } from 'next';
import Input from '@/components/ui/Input';
import Form from '@/components/ui/Form';
import Radio from '@/components/ui/Radio';
import RadioGroup from '@/components/ui/RadioGroup';

const Test: NextPage = () => {
  const onSubmit = (values: any) => {
    console.log('values', values);
  };

  const initialValues = {};
  const form = Form.useForm({ onSubmit, initialValues });

  return (
    <Form form={form}>
      <Form.Field label="test" layout="horizontal">
        <Input />
      </Form.Field>
      <Form.Field label="test">
        <Input />
      </Form.Field>
      <Form.Field>
        <Input />
      </Form.Field>

      <RadioGroup layout="horizontal" name="asdasd">
        <Form.Field>
          <RadioGroup.Radio label="asdasdasd" />
        </Form.Field>
        <Form.Field>
          <RadioGroup.Radio label="asdasdasd" />
        </Form.Field>
        <Form.Field>
          <RadioGroup.Radio label="asdasdasd" />
        </Form.Field>
      </RadioGroup>
    </Form>
  );
};

export default Test;
