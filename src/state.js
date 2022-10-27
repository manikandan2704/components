

import { useState } from "react";
function Main (){
    const [name,setName] = useState("virat");
    const [age,setAge] = useState("31");
    const [dept,setDept] = useState("cricketer");

    return(
        <div>{name} {age} {dept}
        <button onClick={() => setName("mani")}>updatename</button>
        <button onClick={() => setAge("20")}>updateage</button>
        <button onClick={() => setDept("web develober")}>updatedept</button>
        </div>
    );

}
export default Main
