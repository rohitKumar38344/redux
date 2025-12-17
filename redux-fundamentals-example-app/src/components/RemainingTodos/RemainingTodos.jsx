export const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's';
  return (
    <div>
      RemainingTodos <strong>{count}</strong> item{suffix} left
    </div>
  );
};
