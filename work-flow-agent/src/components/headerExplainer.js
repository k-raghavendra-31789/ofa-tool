import HeaderInput from "./headerInput";

function HeaderExplainer( {data} ){

  const render = Object.entries(data).map(([key, items]) => (
  <div key={key} className="flex-1">
    <h1 className="text-2xl text-center bg-red-400 text-white">{key}</h1>
    <ul>
      {items.map((item, index) => (
        // <li key={index}>{item}</li>
        <div>
            <HeaderInput key={item} data={item} /> 
        </div>
      ))}
    </ul>
  </div>
));
    
    return (
        <div className="flex flex-col gap-10 mt-5 p-0">
            {render }
        </div>
    )
}

export default HeaderExplainer;