import { useEffect, useState } from "react";

interface IUseInputsConfig {
  inputIds: string[];
}

export default function useInputs(config: IUseInputsConfig) {
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    config.inputIds.forEach((id,ix)=>{
      const el = document.getElementById(id);

      
    })


    //destructor cleanup
    return ()=>{

    }
  }, [

  ]);

  return {
    values: [
      {
        id: "",
        value: "",
      },
    ],
  };
}
