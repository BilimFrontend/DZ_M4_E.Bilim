import './App.css';
import Modal from "./components/modal/Modal";
import React, {useEffect, useState} from "react";
import Button from "./components/button/Button";
import List from "./components/list/List";
import Input from "./components/input/Input";
import userEvent from "@testing-library/user-event";
import task from "./components/task/Task";
import Users from "./page/users/Users";
import SelectOption from "./components/selectOption/SelectOption";

function App() {
  const [show, setShow] =  useState(false)
  const [input, setInput] = useState("")
  const [titles, setTitles] = useState([])
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
                  id: titles.length === 0 ? 1 : titles[titles.length-1].id + 1,
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
        console.log('useEffect1')
    }, [show]); // [] - зависимость <- срабатывать каждый раз при срабатывании show (без него он будет срабатывать каждый раз)


    useEffect(() => {
        localStorage.setItem('user', 'Bbb') // <- Добавление // user - это ключ
        localStorage.setItem('age', 1234)
        console.log(localStorage.getItem("user"), "user") // <- Получение по ключу
        localStorage.removeItem("user") // <- Удаление по ключу
    }, []);


    useEffect(() => {
        const myLocalList = JSON.parse(localStorage.getItem('titles'))
        if (myLocalList === null){
            return localStorage.setItem('titles', JSON.stringify(titles))
        }
        if (myLocalList.length !== 0){
            setTitles(myLocalList)
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('titles', JSON.stringify(titles))
    },[titles])


    const [users, setUsers] = useState([])


    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.org/users')
        const data = await (response.json())
        setUsers(data)
    }

    const removeAll = () => {
        localStorage.removeItem('titles')
        setTitles([])
    }

    const [filterOption, setFilterOption] = useState('all')
    const option = ['completed', "notCompleted", "all"]
    const handleFilterOption = (event) => {
        setFilterOption(event.target.value)
    }

    const filterTitles = titles.filter(title => {
        switch (filterOption) {
            case "completed": return title.completed
            case "notCompleted": return !title.completed
            default:
                return true
        }
    })

  return (
      <>
          {
              show && <Modal handleShow={handleShow}>
                  <Input type={"text"} placeholder={"Введите текст"} onChangeInput={onChangeInput}/>
                  <Button color={"#64cc64"} onClick={handleAdd} text={"Добавить"}/>
                  <Button color={"#de5f5f"} onClick={handleShow} text={"Закрыть"}/>
              </Modal>
          }

          <div className={"box"}>
              <SelectOption option={option} onChange={handleFilterOption} selectValue={filterOption}/>
              <Button text={"Открыть"} onClick={handleShow}/>
              <Button text={"Получить"} onClick={getUsers}/>
              <Button text={"Очистить"} onClick={removeAll}/>
              <Input placeholder={"Искать"} onChangeInput={handleSearch}/>
          </div>
          <List titles={filterTitles}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handeEdit}/>
          <Users users={users}/>
      </>
  );
}

export default App;


//LocalStorage - сохраняет данные пока мы не удалим