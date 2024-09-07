const EventComponent = (): JSX.Element => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    console.log(e);

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };

  return (
    <div>
      <input onChange={changeHandler} />
      <div draggable onDrag={dragHandler}>
        Drag me
      </div>
    </div>
  );
};

export default EventComponent;
