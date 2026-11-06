import React, {useState} from "react";
function ColorPick(){
    const [color, setColor] = useState("#ffffff");
    const colorchangehandler = (event) =>{
        setColor(event.target.value)
    };

    return(
        <div className="container">
            <h1>Color Picker</h1>
            <div className="display" style={{backgroundColor:color}}>
                <p>selected color: {color}</p>
            </div>
            <label>Select a color</label>
            <input type="color" value={color} onChange={colorchangehandler}></input>

        </div>
    )
}
export default ColorPick