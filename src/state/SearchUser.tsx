import { useState } from 'react';

const users = [
  {
    name: 'Salman',
    age: 28
  },
  {
    name: 'Aamir',
    age: 20
  },
  {
    name: 'Firoz',
    age: 24
  }
];

interface User {
  name: string;
  age: number;
}

const SearchUser: React.FC = (): JSX.Element => {
  const [name, setName] = useState('');
  const [searchedUser, setSearchedUser] = useState<User | undefined>();

  const searchUserHandler = (): void => {
    const user = users.find(
      user => user.name.toLowerCase() === name.toLowerCase()
    );

    return user && setSearchedUser(user);
  };

  return (
    <>
      <h4>Search user</h4>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={searchUserHandler}>Search</button>

      {searchedUser && (
        <>
          <div>User: {searchedUser.name}</div>
          <div>User: {searchedUser.age}</div>
        </>
      )}
    </>
  );
};

export default SearchUser;
