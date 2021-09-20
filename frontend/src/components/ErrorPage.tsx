import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import PATH from '../constants/path';

interface Props {
  title: string;
  message?: string;
  status: number;
}

const ErrorPage: FC<Props> = ({ title, message, status }) => {
  const history = useHistory();

  return (
    <div style={{ padding: '20px 40px' }}>
      <h1 style={{ color: '#eeeeee', fontSize: 40 }}>
        {status} {title}
      </h1>
      <p>{message}</p>
      <button
        onClick={() => history.push(PATH.home)}
        style={{
          color: '#eeeeee',
          background: '#e50914',
          padding: 10,
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bolder',
        }}
      >
        Back to Home page
      </button>
    </div>
  );
};

export default ErrorPage;
