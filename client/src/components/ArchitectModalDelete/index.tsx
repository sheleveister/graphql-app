import * as React from 'react';
import ModalComponent from '../Modal';
import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { deleteArchitect } from '../../schema/mutations';
import { architectorsQuery } from '../../schema/queries';

export const initialData = { id: "", name: "" };

export type Data = { id: string, name: string };

type Props = {
  data: Data;
  setArchitectData: (arg: Data) => void;
}

const ArchitectModalDelete: React.FC<Props> = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [deleteArchitectData] = useMutation(deleteArchitect);
  const { id, name } = props.data;

  useEffect(() => {
    if (id) {
      setModalVisible(true);
    }

  }, [id]);

  const submitData = () => {
    deleteArchitectData({
      variables: { id },
      refetchQueries: [{ query: architectorsQuery }]
    });
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    props.setArchitectData(initialData);
  };

  return (
    <ModalComponent
      title="Are you sure want to delete?"
      isVisible={isModalVisible}
      submitData={submitData}
      closeModal={handleCloseModal}
      isFormValid
    >
      Architect <b>{name}</b> will be deleted
    </ModalComponent>
  )
};

export default ArchitectModalDelete;
