import { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CONFIG from '../constants/config';
import PATH from '../constants/path';
import { useAppContext } from '../context/AppContext';

interface Props {}

const SignOut: FC<Props> = () => {
  const history = useHistory();
  const { setCurrentUser } = useAppContext();

  useEffect(() => {
    localStorage.removeItem(CONFIG.storedTokenName);
    setCurrentUser(null);
    history.push(PATH.signIn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default SignOut;
