import "./App.css";
import { robots } from "./assets/robots";

type Robot = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const Card = ({ id, name, username, email }: Robot) => (
  <div>
    <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
    <div>
      <h2>{name}</h2>
      <p>
        {username} | {email}
      </p>
    </div>
  </div>
);

function App() {
  return (
    <div>
      <input type="search" placeholder="Search Robots" />
      <Card {...robots[0]} />
    </div>
  );
}

export default App;
