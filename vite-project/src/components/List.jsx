import ListItem from './ListItem';

function List({ data }) {
  const handleDelete = (id) => {
    console.log(`Item with ID ${id} deleted`);
  };

  return (
    <ul>
      {data.map(item => (
        <ListItem key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </ul>
  );
}

export default List;


