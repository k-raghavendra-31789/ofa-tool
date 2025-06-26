import MappingDocument from "./pages/MappingDocument";
import SideBarpage from "./pages/SideBarPage";
import { useState } from "react";

function App(){
    const [currentPage, setCurrentPage]  = useState("Mapping")

    const onPageClickHandler = (page) =>{
        setCurrentPage(page)
    }

    var particularPage ;
    if(currentPage === "Landing Page"){
        particularPage =  "Landing Page"
    }else if(currentPage === "Mapping"){
        particularPage =  <MappingDocument />
    }else if(currentPage === "Git-Hub"){
        particularPage =  "Git Hub Credentials"
    }else if(currentPage === "Environment"){
        particularPage =  "Environment to execute in"
    }
    return (
        <div className="flex w-full h-screen">
            <div className="w-[8%] text-white position: fixed">
            <SideBarpage onPageClickHandler={onPageClickHandler}/>
            </div>
            <div className="w-[90%]  h-[100%] flex justify-center items-center ml-40">
                {particularPage}
            </div>
        </div>
    )
}

export default App;