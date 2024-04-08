import { Link } from 'react-router-dom';
import List from '../components/List';

function DashboardPage(props) {
  return (
    <div>
      <h1>DashBoard</h1>
      {props.data.map((List) => {
        return (
          <Link key={List.id} className="List" to = {`/item/${List.id}`}>
            <h3>{List.name}</h3>
          </Link>
        );
      })}
    </div>
  );
}

export default DashboardPage;