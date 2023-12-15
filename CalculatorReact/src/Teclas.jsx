//Create functional component
import React, { useState } from "react";
import './main.css'

const Teclas = () => {

const [ number, setNumber] = useState();

const sum = ({value})=>{
    setNumber(number+{value})
}


    return (
        <section>
            <article className="showNum">
                <p> 0</p>
            </article>
            <article className="keys">
                <button className="beige">CE</button>
                <button className="beige"> /</button>
                <button className="beige"> X</button>
                <button className="orange"> On</button>
                <button className="white"> 7</button>
                <button className="white"> 8</button>
                <button className="white"> 9</button>
                <button className="beige"> C</button>
                <button className="white"> 4</button>
                <button className="white"> 5</button>
                <button className="white"> 6</button>
                <button className="beige"> -</button>
                <button className="white"> 1</button>
                <button className="white"> 2</button>
                <button className="white"> 3</button>
                <button className="beige"> +</button>
                <button className="white" id="bottom">0</button>
                <button className="white">.</button>
                <button className="orange"id="bottom">=</button>
            </article>
        </section>
    );
}

export default Teclas