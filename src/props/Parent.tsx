import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC
      color='red'
      onClick={() => console.log('Clicked')}
    >
      abcd
    </ChildAsFC>
  );
};

export default Parent;
