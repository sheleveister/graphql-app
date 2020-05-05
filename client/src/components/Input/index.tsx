import * as React from 'react';
import Input from 'antd/es/input';
import Form from 'antd/es/form';

type Props = {
  label: string;
  name: string;
  handleInputChange: (fieldName: string, value: string) => void;
  value: string;
  message: string;
}

const InputComponent: React.FC<Props> = (props) => {
  return (
    <Form.Item
      label={props.label}
      name={props.name}
      rules={[{required: true, message: props.message}]}
    >
      <Input
        value={props.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.handleInputChange(props.name, e.target.value)}
      />
    </Form.Item>
  )
};

export default InputComponent;
