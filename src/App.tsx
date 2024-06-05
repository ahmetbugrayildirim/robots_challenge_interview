import "./App.css";
import {useState} from 'react';
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
  const [robotsList, setRobotsList] = useState(robots)
  const [inputValue, setInputValue] = useState('')
  const handleOnChange = (event: any) => {
    const value = event.target.value.toLowerCase();
    setInputValue(value)

    const filteredValues = robotsList.filter(robot => {
      return robot.name.toLowerCase().includes(value) || robot.email.toLowerCase().includes(value) || robot.username.toLowerCase().includes(value)
    });

    if (filteredValues.length > 0 && value.length > 0) {
      setRobotsList(filteredValues)
      return
    } else if (value.length > 0 && filteredValues.length === 0){
      setRobotsList([])
      return
    }
    setRobotsList(robots)
  }

  return (
    <div>
      <input value={inputValue} type="search" placeholder="Search Robots" onChange={handleOnChange} />
      {robotsList.map(robot => {
        return <Card key={robot.id} {...robot} />
      })}
    </div>
  );
}

export default App;
