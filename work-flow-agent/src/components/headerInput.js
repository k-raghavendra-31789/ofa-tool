import Dropdown from "./Dropdown";

function HeaderInput({data,options}){
    const dropDownValue = [
        {label: "target_field_name", value: "Target Field Name"},
        {label: "target_table_name", value: "Target Table Name"},
        {label: "source_table_name", value: "Source Table Name"},
        {label: "source_column_name", value: "Source Column Name"},
        {label: "target_transformation_logic", value: "Transformation Logic"},
        {label: "comments", value: "Comments"},
        {label: "others", value: "Other"},
    ]

    return (
        <div className="flex flex-row gap-1 items-center">
             {/* <h1 className="text-xl">{data}</h1> */}
             <Dropdown options={dropDownValue} labelData={data}></Dropdown>
            
        </div>
    )
}

export default HeaderInput;