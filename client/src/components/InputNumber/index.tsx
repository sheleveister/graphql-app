import * as React from 'react';
import Form from 'antd/es/form';
import InputNumber from 'antd/es/input-number';

type Props = {
  label: string;
  name: string;
  handleAgeChange: (fieldName: string, value: number | undefined) => void;
  value: number | undefined;
  message: string;
}

const InputNumberComponent: React.FC<Props> = (props) => {
  return (
    <Form.Item
      label={props.label}
      name={props.name}
      rules={[{ required: true, message: props.message }]}
    >
      <InputNumber
        value={props.value}
        onChange={(value) => props.handleAgeChange(props.name, value)}
        formatter={(value) => inputAgeFormatter(value, props.value)}
      />
    </Form.Item>
  );
};

const inputAgeFormatter = (value: number | string | undefined, propsValue: number | undefined): string => {
  return value ? String(propsValue).replace(/[^0-9]+/g, '') : String(value);
};

export default InputNumberComponent;
