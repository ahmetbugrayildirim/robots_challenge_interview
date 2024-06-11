import "./App.css";
import { robots } from "./assets/robots";
import { useState } from "react";

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
  const [filteredBots, setFilteredBots] = useState(robots);

  const updateQuery = (value: string) => {
    setQuery(value);

    const lowerValue = value.toLowerCase()
    const matches = robots.filter(({ name, email, username }) => name.toLowerCase().indexOf(lowerValue) !== -1 || 
      email.toLowerCase().indexOf(lowerValue) !== -1 || username.toLowerCase().indexOf(lowerValue) !== -1)
    setFilteredBots(matches)
  }

  return (
    <div>
      <input type="search" placeholder="Search Robots" onChange={e => updateQuery(e.currentTarget.value)} value={query} />
      {filteredBots.map(robot => 
        <Card key={robot.id} {...robot} />
      )}
    </div>
  );
}

export default App;
