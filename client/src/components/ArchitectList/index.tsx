import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { architectorsQuery } from '../../schema/queries';
import ArchitectCard from '../ArchitectCard';
import { renderQueryResult } from '../../utils/renderQueryResult';

import './ArchitectList.scss';

type Props = {
  data?: Data;
  handleDeleteCard: (id: string, name: string) => void;
};

type Data = {
  architects: Architect[];
}

export type Architect = {
  id: string;
  name: string;
  cityOfBirth: string;
  age: number | undefined;
  country: string;
  university: string[];
  architectureStyle: string[];
  buildings: Buildings[];
}

type Buildings = {
  id: string;
  name: string;
}

const ArchitectList: React.FC<Props> = (props) => {
  const queryResult = useQuery<Data>(architectorsQuery);

  return renderQueryResult((data: Data) => (
    <ul className="card-list">
      {data.architects.map((architect) => (
        <ArchitectCard
          key={architect.id}
          architect={architect}
          handleDeleteCard={props.handleDeleteCard}
        />
      ))}
    </ul>
  ))(queryResult);
};

export default ArchitectList;
