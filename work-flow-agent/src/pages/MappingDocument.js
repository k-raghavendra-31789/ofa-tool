import { useState } from "react";
import * as XLSX from 'xlsx';
import HeaderExplainer from "../components/headerExplainer";



function MappingDocument(){
    const [worksheets, setWorksheets] = useState({}); // { sheetName: data[][] }
    const [fileName, setFileName] = useState("")
    const [columnDescriptions, setColumnDescriptions] = useState({});

        const handleFile = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
    
        const reader = new FileReader();
        reader.onload = (evt) => {
          
          const data = evt.target.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          const allData = {};
         
          setFileName("Okay set")
          workbook.SheetNames.forEach((name) => {
            const sheet = workbook.Sheets[name];
            const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            allData[name] = sheetData;
          });
          setWorksheets(allData);
          
          const updatedDescriptions = {};
            Object.keys(allData).forEach((sheetName) => {
            updatedDescriptions[sheetName] = allData[sheetName][0];
            });
    
                setColumnDescriptions((prev) => ({
                    ...prev,
                    ...updatedDescriptions
                }));
        };
        
        reader.readAsBinaryString(file);
        
      };

     var showContent;
     if(fileName.length === 0){
        showContent = <input type="file" accept=".xlsx,.xls" 
                    className="block items-center justify-center mt-100 ml-150 text-xl text-slate-500 
                    file:mr-4 file:py-2 file:px-4 file:rounded-md
                    file:border-0 file:text-xl file:font-semibold
                     file:bg-red-400 file:text-white
                 hover:file:bg-red-800" onChange={handleFile}/> 
     }else if(fileName.length > 0){
       console.log("hello")
     }
    return (
        
            <div className="w-[100%] h-[100%]">
               {showContent}
               {Object.keys(columnDescriptions).length === 0 ? null : <HeaderExplainer data={columnDescriptions} 
                    />}
            </div>
        
    )
}

export default MappingDocument;