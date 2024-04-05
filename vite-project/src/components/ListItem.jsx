
function ListItem({ item, onDelete }) {
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <li>
      <span>{item.name}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default ListItem;



