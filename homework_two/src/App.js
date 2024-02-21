import './App.css';
import Modal from "./components/modal/Modal";
import React, {useEffect, useState} from "react";
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
    console.table(titles)

    const handleDone = (id) => {
        titles.map(title => {
            if (title.id===id) {
                return title.completed = !title.completed
            }else{
                return titles
            }
        })
        setTitles([...titles])
    }

    const [searchInput, setSearchInput] = useState('')
    const [originalTitles, setOriginalTitles] = useState(titles)
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
      setShow(!show)
  }

  const handleDelete = (id) => {
      const deletedObj = titles.filter(title => title.id!==id)
      setTitles(deletedObj)
  }

  //const a = [1,2,3]
  //const b = [4,5,6]
  //const c = [...a,...b] <- spread(...) оператор объединил два массива в один.
  //console.log(c) <- будет [1,2,3,4,5,6]

  const handleSearch = (event) => {
      const inputValue = event.target.value
      setSearchInput(inputValue)
      if (inputValue===""){
          setTitles(originalTitles)
      }else{
          const filterTitles = titles.filter(title => title.title.toLowerCase().includes(inputValue.toLowerCase()))
          setTitles(filterTitles)
      }
  }

  const handeEdit = (editTodo) => {
      titles.map(title => {
          if (title.id === editTodo.id){
              return title.title = editTodo.title
          }
      })
      setTitles(titles)
  }



    useEffect(() => { // <- Сделать что-то после рендера(вызывается каждый раз)
        console.log('useEffect')
    }, [show]); // [] - зависимость <- срабатывать каждый при срабатывании show (без него он будет срабатывать каждый раз)


  return (
      <>
          {
              show && <Modal handleShow={handleShow}>
                  <Input type={"text"} placeholder={"Введите текст"} onChangeInput={onChangeInput}/>
                  <Button color={"#64cc64"} onClick={handleAdd} text={"Добавить"}/>
                  <Button color={"#de5f5f"} onClick={handleShow} text={"Закрыть"}/>
              </Modal>
          }

          <Button text={"Open"} onClick={handleShow}/>
          <Input placeholder={"Искать"} onChangeInput={handleSearch}/>
          <List titles={titles}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handeEdit}/>
      </>
  );
}

export default App;
