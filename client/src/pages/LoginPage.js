import { useState } from "react";

export default function LoginPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function login(ev){
        ev.preventDefault();
        fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
        })
    }

    return(
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <input type="Text" placeholder="Username" value={username} onChange={ev => setUsername(ev.target.value)}></input>
            <input type="Password" placeholder="Password" value={password} onCanPlay={ev => setPassword(ev.target.value)}></input>
            <button>Login</button>
        </form>
    );
}