import './App.css';
import Modal from "./components/modal/Modal";
import {useState} from "react";
import Button from "./components/button/Button";
import List from "./components/list/List";

function App() {
  const [show, setShow] =  useState(false)

  const titles = [{
          id:1 ,
          title: 'coding',
          completed: false,
      },
      {
          id:2,
          title: 'eat',
          completed: false,
      },
      {
          id:3,
          title: 'sleep',
          completed: false,
      }]

    const handleShow = () => {
      setShow(!show)
      return console.log(show)
  }

  return (
      <>
          {
              show && <Modal handleShow={handleShow}/>
          }

          <Button text={"Open"} handle={handleShow}/>
          {
              titles.map(title => <List list={title}/>)
          }
      </>
  );
}

export default App;
