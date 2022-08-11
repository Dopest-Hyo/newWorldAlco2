import React, {useState} from "react";

const useInput = ()=>{
    //2. value는
    const [value, setValue] = useState("");


// const handler = (e) =>{ // 이벤트 핸들러 있을때만사용
//     setValue(e.target.value);
// };

return [value, setValue];
}

export default useInput