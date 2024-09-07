interface ChildProps {
  color: string;
  onClick(): void;
  children: string;
}

export const Child = ({ color, onClick, children }: ChildProps): JSX.Element => {
  return (
    <div>
      {color} {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children}): JSX.Element => {
  return (
    <div>
      {color} {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
