import React, { useRef } from 'react';
import { useState } from 'react';

const App = () => {
  const divStyle = {
    // backgroundColor: 'rgb(238,240,244)',
    height: '100%',
    padding: '30px',
    margin: '0px auto',
    width: '1100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const title = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50px',
    fontSize: '50px',
    fontWeight: '500',
  };

  const input = {
    width: '100%',
    height: '40px',
    borderRadius: '10px',
    padding: '5px',
    border: '1px solid skyblue',
    fontSize: '20px',
  };

  const inputtodo = {
    width: '100%',
    margin: '15px',
    height: '100px',
    borderRadius: '10px',
    border: '1px solid skyblue',
    padding: '5px',
    fontSize: '20px',
    resize: 'none',
  };

  const addBtn = {
    width: 'calc(100% + 10px)',
    border: '1px solid skyblue',
  };

  const todotitle = {
    margin: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: '25px',
  };

  const list = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    fontSize: '20px',
  };

  const formStyle = {
    width: '40%',
    height: 'auto',
    border: '1px solid lightblue',
    padding: '30px',
    borderRadius: '10px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0px 0px 6px -2px',
  };

  const listCardStyle = {
    boxShadow: '0px 0px 6px -2px',
    height: 'auto',
    borderRadius: '10px',
    padding: '0px 40px 10px 40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const cards = {
    width: '30%',
  };

  const cardtitle = { fontSize: '23px', fontWeight: '700' };

  const liTodo = { listStyleType: 'none', fontSize: '18px', fontWeight: '500' };

  const buttonDiv = {
    margin: '30px auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'rows',
    justifyContent: 'space-evenly',
  };

  const deleteBtn = {
    backgroundColor: 'rgb(179, 187, 202)',
    color: 'white',
  };

  const completeBtn = { backgroundColor: 'rgb(190,233,244)' };

  // Todo Card 상태 정의
  const [todoList, setTodoList] = useState([
    // { id: Date.now(), todoTitle: '공부하기', todo: '성실하게 공부하기' },
    // { id: Date.now() + 1, todoTitle: '과제', todo: '최선을 다해서 하기' },
  ]);

  const [doneList, setDoneList] = useState([
    // { id: Date.now(), todoTitle: '공부하기', todo: '해야할일' },
  ]);

  // Todo 입력 값 상태 정의
  const [todoTitle, setTodoTitle] = useState('');
  const [todo, setTodo] = useState('');

  // onChange 함수
  const onChangeSetTodoTitle = (e) => {
    setTodoTitle(e.target.value);
  };
  const onChangeSetTodo = (e) => {
    setTodo(e.target.value);
  };

  // Todo 카드 추가 함수
  const addTodo = (e) => {
    e.preventDefault();
    if (!todoTitle || !todo) {
      alert('제목과 내용을 입력해주세요.');
    } else {
      const newTodo = {
        id: Date.now(),
        todoTitle: todoTitle,
        todo: todo,
      };
      setTodoList([...todoList, newTodo]);
      setTodo('');
      setTodoTitle('');
      inputRef.current.focus();
    }
  };

  // TodoList 삭제 버튼 기능 함수
  const removeTodo = (id) => {
    setTodoList(todoList.filter((list) => list.id !== id));
  };

  // 완료 버튼 기능 함수
  const complete = (id) => {
    const newDoneCard = todoList.find((list) => list.id === id);

    if (newDoneCard) {
      removeTodo(id);
      setDoneList([...doneList, newDoneCard]);
    }
  };

  // 취소 버튼 기능 함수
  const cancel = (id) => {
    const cancelCard = doneList.find((list) => list.id === id);

    if (cancelCard) {
      removeDoneTodo(id);
      setTodoList([...todoList, cancelCard]);
    }
  };

  // DonList 삭제 버튼 기능
  const removeDoneTodo = (id) => {
    setDoneList(doneList.filter((list) => list.id !== id));
  };

  // auto포커스
  const inputRef = useRef();

  return (
    <>
      <div style={divStyle}>
        <div style={title}>
          <nav>To do List</nav>
        </div>
        <form onSubmit={addTodo} style={formStyle} action="">
          <input
            ref={inputRef}
            autoFocus
            style={input}
            value={todoTitle}
            onChange={onChangeSetTodoTitle}
            type="text"
            placeholder="제목을 입력해주세요"
          />
          <textarea
            style={inputtodo}
            value={todo}
            type="text"
            placeholder="내용을 입력해주세요"
            onChange={onChangeSetTodo}
          />
          <button style={addBtn} type="submit">
            추가
          </button>
        </form>
        <div style={todotitle}>
          <span>Working</span>
          <span>Done</span>
        </div>
        <div style={list}>
          <div style={cards}>
            {todoList.map((todoCard) => (
              <ul key={todoCard.id} id={todoCard.id} style={listCardStyle}>
                <p style={cardtitle}>{todoCard.todoTitle}</p>
                <li style={liTodo}>{todoCard.todo}</li>
                <div style={buttonDiv}>
                  <button
                    style={deleteBtn}
                    onClick={() => removeTodo(todoCard.id)}
                    type="button"
                  >
                    삭제
                  </button>
                  <button
                    style={completeBtn}
                    onClick={() => complete(todoCard.id)}
                    type="button"
                  >
                    완료
                  </button>
                </div>
              </ul>
            ))}
          </div>
          <div style={cards}>
            {doneList.map((doneCard) => (
              <ul key={doneCard.id} id={doneCard.id} style={listCardStyle}>
                <p style={cardtitle}>{doneCard.todoTitle}</p>
                <li style={liTodo}>{doneCard.todo}</li>
                <div style={buttonDiv}>
                  <button
                    style={deleteBtn}
                    onClick={() => removeDoneTodo(doneCard.id)}
                    type="button"
                  >
                    삭제
                  </button>
                  <button
                    style={completeBtn}
                    onClick={() => cancel(doneCard.id)}
                    type="button"
                  >
                    취소
                  </button>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
