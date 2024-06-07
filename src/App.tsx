import "./App.css";
import { robots } from "./assets/robots";
import { ChangeEvent, useCallback, useState } from 'react';

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

function hasSearch(input: string, search: string): boolean {
  return Boolean(input?.toLowerCase().includes(search.toLowerCase()))
}

function filterBySearch(robot: Robot, search: string): boolean {
  if (!search) {
    return true;
  }

  return hasSearch(robot.name, search)
    || hasSearch(robot.email, search)
    || hasSearch(robot.username, search);
}


function App() {

  const [search, setSearch] = useState<string>('');

  const handleSearchChange = useCallback((evt: ChangeEvent<HTMLInputElement> ) => {
    setSearch(evt.target?.value ?? '');
  }, [])

  const filteredRobots = robots.filter((robot) => filterBySearch(robot, search))

  return (
    <div>
      <input type="search" placeholder="Search Robots" onChange={handleSearchChange} />
      {filteredRobots.map(robot => (<Card {...robot}/>))}
    </div>
  );
}

export default App;
