//Create functional component
import { useState } from "react";
import '../../main.css'

const Show = () => {

const [ result, setResult] = useState("");

const handleClick = (e)=>{
    setResult(result.concat(e.target.name));
}
const clear = ()=>{
    setResult("");
}

const backspace = ()=>{
   setResult(result.slice(0, result.length-1)); //-1 as well
}

const equals = ()=>{
    try{
        setResult(eval(result).toString());
    } catch(err){
        setResult('Error')
    }
    
}

    return (
        <section>
            <article className="showNum">
                <p> {result}</p>
                <span>{result}</span>
            </article>
            <article className="keys">
                <button onClick={clear} className="beige" id="clear">CE</button>
                <button name="/" onClick={handleClick} className="beige"> /</button>
                <button name="x" onClick={handleClick} className="beige"> x</button>
                <button onClick={clear} className="orange"> On</button>
                <button name="7" onClick={handleClick} className="white"> 7</button>
                <button name="8" onClick={handleClick} className="white"> 8</button>
                <button name="9" onClick={handleClick} className="white"> 9</button>
                <button onClick={backspace} className="beige" id="backspace"> C</button>
                <button name="4" onClick={handleClick} className="white"> 4</button>
                <button name="5" onClick={handleClick} className="white"> 5</button>
                <button name="6" onClick={handleClick} className="white"> 6</button>
                <button name="-" onClick={handleClick} className="beige"> -</button>
                <button name="1" onClick={handleClick} className="white"> 1</button>
                <button name="2" onClick={handleClick} className="white"> 2</button>
                <button name="3" onClick={handleClick} className="white"> 3</button>
                <button name="+" onClick={handleClick} className="beige"> +</button>
                <button name="0" onClick={handleClick} className="white" id="bottom">0</button>
                <button name="." onClick={handleClick} className="white">.</button>
                <button onClick={equals} className="orange"id="bottom">=</button>
            </article>
        </section>
    );
}

export default Show