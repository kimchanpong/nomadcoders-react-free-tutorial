import {useState, useEffect} from "react";

function App_todo() {
    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([]);
    const onChange = (event) => {
        setTodo(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === "") {
            return;
        }

        setTodo("");
        setTodos((prevArray) => {
            return [toDo, ...prevArray]
        });
    }

    console.log(toDos)

    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={toDo}
                    onChange={onChange}
                    placeholder="write your to do..."
                />
                <button>
                    Add To Do
                </button>
            </form>
            <hr/>
            <ul>
                {
                    toDos.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default App_todo;
