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
  const [robotList, setRobotList] = useState(robots);
  
  const handleSearches = ({ target: { value } }: React.ChangeEvent<HTMLInputElement> ) => {
    const filteredRobots = robots.filter(robot => {
      return (
        robot.name.toLowerCase().includes(value.toLowerCase()) 
        || robot.username.toLowerCase().includes(value.toLowerCase())
        || robot.email.toLowerCase().includes(value.toLowerCase())
      );
    })
    setRobotList(filteredRobots);
  }
  
  return (
    <div>
      <input type="search" placeholder="Search Robots" onChange={e => handleSearches(e)}/>
      {robotList.map(robot => <Card {...robot} key={robot.id}/>)}
    </div>
  );
}

export default App;
