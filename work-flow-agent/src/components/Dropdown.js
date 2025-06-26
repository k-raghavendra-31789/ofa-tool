import { useState } from "react";

function Dropdown( {labelData,options} ){
    const [isOpen, setIsOpen] = useState(false)

    const renderedOptions = options.map((el) =>{
        return <div key={el.label}>
            {el.value}
        </div>
    })
    return(
        <div className="flex flex-row">
            <div className="flex flex-row justify-between">
            <div className="w-80">{labelData}</div>
                <div onClick={ () =>{
                    setIsOpen(!isOpen)
                 }} 
                    >Select..{ isOpen ? renderedOptions : null }</div>
                </div>
            
        </div>
    )
}

{/* <div className="relative inline-flex items-start">
  <span className="font-medium pr-2">{title}</span>
  <div className="absolute left-full ml-2">
    <select className="bg-white border rounded px-2 py-1">
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  </div>
</div> */}

export default Dropdown;