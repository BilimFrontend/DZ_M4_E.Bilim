import './App.css';
import Modal from "./components/modal/Modal";
import React, {useState} from "react";
import Button from "./components/button/Button";
import List from "./components/list/List";
import Input from "./components/input/Input";

function App() {
  const [show, setShow] =  useState(false)
  const [input, setInput] = useState("")
  const [titles, setTitles] = useState([
      {
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
      }
      ])

    const handleShow = () => {
      setShow(!show)
      return console.log(show)
    }

  const onChangeInput = (event) => {
      setInput(event.target.value)
  }

  const handleAdd = () => {
      setTitles(prev=>[...prev, //<- prevState - предыдущее(прошлое) состояние
              {
                  id: titles.length + 1,
                  title: input,
                  completed: false
              }
          ]
      )
  }

  const handleDelete = (id) => {
      const deletedObj = titles.filter(task => task.id!==id)
      setTitles(deletedObj)
  }

  //const a = [1,2,3]
  //const b = [4,5,6]
  //const c = [...a,...b] <- spread(...) оператор объединил два массива в один.
  //console.log(c) <- будет [1,2,3,4,5,6]

  return (
      <>
          {
              show && <Modal handleShow={handleShow}>
                  <Input type={"text"} placeholder={"Введите текст"} onChangeInput={onChangeInput}/>
                  <Button onClick={handleAdd} text={"Добавить"}/>
                  <Button onClick={handleShow} text={"Закрыть"}/>
              </Modal>
          }

          <Button text={"Open"} onClick={handleShow}/>
          <List titles={titles} handleDelete={handleDelete}/>
      </>
  );
}

export default App;
