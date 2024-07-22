import { useState } from 'react';

export default function Titulo() {
    const [Tasks, satTasks] = useState([]);
    const [Task, setTask] = useState('');
    const handleChange = (event) => {
        setTask (event.target.value)
        };
    const handleSubmit = (event) => {
        event.preventDefault();
        window.alert('Formulario enviado');
            };
    return(<div>
        
        <div className="App">
            <header className="App-header">
                <h1>Lista De Cosas Para Hacer</h1>
            </header>
        </div>
        <form onSubmit={handleSubmit}/>
        <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
            type="text"
            id="nombre" 
            name="nombre"
            value={Task}
            onChange={handleChange}
            />
        </div>
    </div>
    )
}