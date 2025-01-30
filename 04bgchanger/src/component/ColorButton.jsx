


function ColorButton({ btncolor,setColor, textcolor="white" }){

    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    return (
        <>
        <button className="outline-none px-4 py-1 rounded-full  shadow-lg "
        onClick={()=>setColor(btncolor)}
         style={{backgroundColor:btncolor, color:textcolor}}>
            {capitalizeFirstLetter(btncolor)}
        </button>
        </>
    )
}

export default ColorButton;