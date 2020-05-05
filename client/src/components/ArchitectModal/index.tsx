import * as React from 'react';
import Form from 'antd/es/form';
import InputComponent from '../Input';
import InputNumberComponent from '../InputNumber';
import SelectComponent from '../Select';
import ModalComponent from '../Modal';
import ButtonComponent from '../Button';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { addArchitect } from '../../schema/mutation';
import { architectorsQuery, architectureStylesQuery, universitiesQuery } from '../../schema/queries';
import { ReactText } from 'react';
import { LabeledValue } from 'antd/es/select';

const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 20 },
};

enum ArchitectFields {
  name = 'name',
  cityOfBirth = 'cityOfBirth',
  age = 'age',
  country = 'country',
  university = 'university',
  architectureStyle = 'architectureStyle',
}

const initialArchitectData: AddArchitect = {
  name: "",
  cityOfBirth: "",
  age: undefined,
  country: "",
  university: [],
  architectureStyle: [],
};

type AddArchitect = {
  name: string;
  cityOfBirth: string;
  age: number | undefined;
  country: string;
  university: string[];
  architectureStyle: string[];
}

type SelectValueType = ReactText[] | ReactText | LabeledValue | LabeledValue[];

type UniversitiesData = {
  universities?: Dictionary[];
}

type ArchitectureStylesData = {
  styles?: Dictionary[];
}

type Dictionary = {
  id: string;
  name: string;
}

const ArchitectModal: React.FC<{}> = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [architectDataState, setArchitectData] = useState<AddArchitect>(initialArchitectData);

  const [addArchitectData] = useMutation(addArchitect);
  const { data: universitiesData } = useQuery<UniversitiesData>(universitiesQuery);
  const { data: stylesData } = useQuery<ArchitectureStylesData>(architectureStylesQuery);

  const addData = () => {
    addArchitectData({
      variables: architectDataState,
      refetchQueries: [{ query: architectorsQuery }]
    });
  };

  const setInitialData = () => {
    setArchitectData(initialArchitectData);
  };

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setArchitectData({ ...architectDataState, [fieldName]: value });
  };

  const handleAgeChange = (fieldName: string, value: number|undefined) => {
    if (value && value >= 1 && value <= 100) {
      setArchitectData({ ...architectDataState, [fieldName]: value });
    }
  };

  const handleSelectChange = (fieldName: string, value: SelectValueType) => {
    setArchitectData({ ...architectDataState, [fieldName]: value });
  };

  const isFormValid = (): boolean => {
    const requiredFields = [ArchitectFields.name, ArchitectFields.cityOfBirth, ArchitectFields.age, ArchitectFields.country];

    return requiredFields.every(key => architectDataState[key]);
  };

  return (
    <React.Fragment>
      <ButtonComponent
        title="Add Architect"
        handleModalOpen={handleModalOpen}
      />

      <ModalComponent
        title="Add Architect"
        isFormValid={isFormValid()}
        addData={addData}
        setInitialData={setInitialData}
        isVisible={isModalVisible}
        closeModal={handleCloseModal}
      >
        <Form name="basic" {...layout}>
          <InputComponent
            label="Name"
            name={ArchitectFields.name}
            value={architectDataState.name}
            message="Please input name!"
            handleInputChange={handleInputChange}
          />
          <InputComponent
            label="City of birth"
            name={ArchitectFields.cityOfBirth}
            value={architectDataState.cityOfBirth}
            message="Please input city of birth!"
            handleInputChange={handleInputChange}
          />
          <InputComponent
            label="Country"
            name={ArchitectFields.country}
            value={architectDataState.country}
            message="Please input country!"
            handleInputChange={handleInputChange}
          />
          <InputNumberComponent
            label="Age"
            name={ArchitectFields.age}
            value={architectDataState.age}
            message="Please input age!"
            handleAgeChange={handleAgeChange}
          />
          <SelectComponent<UniversitiesData>
            label="Universities"
            placeholder="Please select university"
            name={ArchitectFields.university}
            mode="multiple"
            handleSelectChange={handleSelectChange}
            data={universitiesData}
            options={universitiesData?.universities}
          />
          <SelectComponent<ArchitectureStylesData>
            label="Architecture styles"
            placeholder="Please select architecture style"
            name={ArchitectFields.architectureStyle}
            mode="multiple"
            handleSelectChange={handleSelectChange}
            data={stylesData}
            options={stylesData?.styles}
          />
        </Form>
      </ModalComponent>
    </React.Fragment>
  )
};

export default ArchitectModal;
