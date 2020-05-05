import * as React from 'react';
import { Architect } from '../ArchitectList';
import { DeleteOutlined } from '@ant-design/icons';

import './ArchitectCard.scss';

type Props = {
  architect: Architect;
  handleDeleteCard: (id: string, name: string) => void;
}

const ArchitectCard: React.FC<Props> = (props) => {
  const {id, name, cityOfBirth, age, university, architectureStyle, buildings} = props.architect;

  const buildingsNames: string[] = buildings.map(({name}) => name);

  return (
    <li key={id} className="card">
      <span className="card__item-title">
        {name}
      </span>

      <CardItemText
        label="City of birth"
        data={cityOfBirth}
      />
      <CardItemText
        label="Age"
        data={String(age)}
      />
      <CardItemText
        label="University"
        data={university}
      />
      <CardItemText
        label="Architecture style"
        data={architectureStyle}
      />
      <CardItemText
        label="Building names"
        data={buildingsNames}
      />
      <DeleteOutlined
        className="delete-icon"
        onClick={() => props.handleDeleteCard(id, name)}
      />
    </li>
  )
};

const CardItemText: React.FC<{ label: string, data: string | string[]}> = ({ label, data}) => {
  if (!data.length) {
    return null;
  }

  return (
    <div className="card__item-text">
      <span className="card__item-text--main">
        {`${label}:`}
      </span>
      <div>
        {Array.isArray(data) ? data.join('; ') : data}
      </div>
    </div>
  );
};

export default ArchitectCard;
