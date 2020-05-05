import * as React from 'react';
import Form from 'antd/es/form';
import Select, { LabeledValue } from 'antd/es/select';
import { ReactText } from 'react';
const { Option } = Select;

type Dictionary = {
  id: string;
  name: string;
}

type Props<T> = {
  label: string;
  name: string;
  mode?: "multiple" | "tags";
  placeholder: string;
  handleSelectChange: (name: string, value: ReactText[] | ReactText | LabeledValue | LabeledValue[]) => void;
  data: T | undefined;
  options: Dictionary[] | undefined,
};

const SelectComponent: <T>(p: Props<T>) => React.ReactElement<Props<T>> = (props)  => {

  return (
    <Form.Item label={props.label}
      name={props.name}
    >
      <Select
        mode={props.mode}
        style={{ maxWidth: '330px' }}
        placeholder={props.placeholder}
        onChange={(value) => props.handleSelectChange(props.name, value)}
      >
        {props.data ? props.options?.map(option => (
          <Option key={option.id} value={option.name}>
            {option.name}
          </Option>
        )) : null}
      </Select>
    </Form.Item>
  )
};

export default SelectComponent;
