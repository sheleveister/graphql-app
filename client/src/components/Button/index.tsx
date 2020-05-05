import * as React from 'react';
import Button from 'antd/es/button';

type Props = {
  title: string;
  handleModalOpen: () => void;
}

const ButtonComponent: React.FC<Props> = (props) => {
  return (
    <Button
      type="primary"
      size="large"
      onClick={props.handleModalOpen}
      className="button"
    >
      {props.title}
    </Button>
  );
};

export default ButtonComponent;
