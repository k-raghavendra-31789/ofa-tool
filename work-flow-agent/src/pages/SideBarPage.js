import SideBarComponent from "../components/sideBarComponent";

function SideBarpage({onPageClickHandler}){
    const barComponents = ["Mapping","Git-Hub","Environment"]

    return (
        <div className="flex flex-col h-screen w-25">
            <div className="flex-1 flex items-center justify-center border bg-blue-500 text-white" onClick={ () =>{
                    onPageClickHandler(barComponents[0])
            }}> 
            <SideBarComponent header={barComponents[0]} /></div>
            <div className="flex-1 flex items-center justify-center border bg-blue-500 text-white" onClick={ () =>{
                onPageClickHandler(barComponents[1])
            }}>
                <SideBarComponent header={barComponents[1]} />
                </div>
            <div className="flex-1 flex items-center justify-center border bg-blue-500 text-white" onClick={ () =>{
                onPageClickHandler(barComponents[2])
            }}>
                <SideBarComponent header={barComponents[2]} />
            </div>
        </div>
    )
}

export default SideBarpage;