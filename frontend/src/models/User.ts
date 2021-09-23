import Favorite from './Favorite';

interface User {
  id?: number;
  username: string;
  password: string;
  email: string;
  role?: string;
  favorites?: Favorite[];
}

export default User;