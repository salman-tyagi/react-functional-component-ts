import { useState } from 'react';

const GuestsList: React.FC = (): JSX.Element => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const addGuestHandler = (): void => {
    setGuests([...guests, name]);
    setName('');
  };

  return (
    <>
      <h3>Guests List:</h3>
      <ul>
        {guests.map(guest => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>

      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={addGuestHandler}>Add Guest</button>
    </>
  );
};

export default GuestsList;
