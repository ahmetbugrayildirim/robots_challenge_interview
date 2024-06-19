import { useState } from "react";
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
  const [query, setQuery] = useState('');
  const [filteredRobots, setFilteredRobots] = useState<Robot[]>(robots);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    setFilteredRobots(robots.filter((robot) => {
      return (robot.email.toLowerCase().includes(val.toLowerCase()) ||
              robot.name.toLowerCase().includes(val.toLowerCase()) ||
              robot.username.toLowerCase().includes(val.toLowerCase()))
    }))
  }
  return (
    <div>
      <input type="search" placeholder="Search Robots" value={query} onChange={(e) => handleInputChange(e)} />
      {filteredRobots.map((robot) => <Card {...robot} /> )}
    </div>
  );
}

export default App;
