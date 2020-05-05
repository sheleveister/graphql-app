import * as React from 'react';
import Modal from 'antd/es/modal';

type Props = {
  title: string;
  isFormValid: boolean;
  isVisible: boolean;
  submitData: () => void;
  closeModal: () => void;
}

const ModalComponent: React.FC<Props> = (props) => {
  const handleSubmit = () => {
    props.closeModal();
    props.submitData();
  };

  const handleCancel = () => {
    props.closeModal();
  };

  return (
    <Modal
      title={props.title}
      visible={props.isVisible}
      onOk={handleSubmit}
      onCancel={handleCancel}
      okButtonProps={{ disabled: !props.isFormValid }}
      destroyOnClose={true}
    >
      {props.children}
    </Modal>
  )
};

export default ModalComponent;
