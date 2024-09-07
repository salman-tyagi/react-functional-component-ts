import { useEffect, useRef, useState } from 'react';

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
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [searchedUser, setSearchedUser] = useState<User | undefined>();

  const searchUserHandler = (): void => {
    const user = users.find(
      user => user.name.toLowerCase() === name.toLowerCase()
    );

    return user && setSearchedUser(user);
  };

  useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current.focus();
  }, []);

  return (
    <>
      <h4>Search user</h4>
      <input
        ref={inputRef}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={searchUserHandler}>Search</button>

      {searchedUser && (
        <>
          <div>User: {searchedUser.name}</div>
          <div>Age: {searchedUser.age}</div>
        </>
      )}
    </>
  );
};

export default SearchUser;
