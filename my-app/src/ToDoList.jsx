import { act, useState } from 'react';

export default function Titulo() {
    const [Tasks, setTasks] = useState([])

    const [Task, setTask] = useState({
        act: '',
        cat: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTask({
            ...Task,
            [name]: value
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setTask({
            act: '',
            cat: ''
        })
    };
    const RemoveTask = (index) =>{
        const filtrado = Tasks.filter((tarea, i) =>
            i !== index
        )
        setTasks(filtrado)
    }
    return (<div>

        <div className="App">
            <header className="App-header">
                <h1>Lista De Cosas Para Hacer</h1>
            </header>
        </div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="Tarea">Tarea:</label>
            <input
                type="text"
                id="Tarea"
                name="Tarea"
                value={Task.act}
                onChange={handleChange}
            />
            <label htmlFor="Categoria">Tarea:</label>
            <input
                type="text"
                id="Categoria"
                name="Categoria"
                value={Task.cat}
                onChange={handleChange}
            />
            <button type="submit">Enviar</button>
        </form>
        <ul>
            {Tasks.map((element,i) => <li id={i}>{element}  <button onClick={()=>RemoveTask(i)}  >eliminar</button></li>)}
        </ul>
    </div>
    )
}