import Dashboard from './Dashboard';
import VozLibrosComandos from './voz/VozLibrosComandos';


export default function VozLibros() {
    return (
        <>
            <Dashboard />

            <div>
                <h3>Reconocimiento del habla relacionado con libros:</h3>
                
                <VozLibrosComandos />
            </div>
        </>
    );
}