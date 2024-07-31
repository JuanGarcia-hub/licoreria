import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client';

function App() {
    return (
        <div>
            <p>Nueva información</p>
        </div>
    );
}

const modificarContenedor = document.getElementById('txtContenedor'); 

const root = ReactDOM.createRoot(modificarContenedor); 

root.render(<App />);
