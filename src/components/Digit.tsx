interface Props{
    digit: string;
}

function Digit({digit} : Props) {
    return ( 
        <div 
            className="flex flex-row justify-center items-center 
                w-fit
                text-3xl 
                bg-[#ddd4c0] p-1 rounded-lg shadow-sm
                sm:w-7
                md:w-8
                lg:w-16
                lg:text-6xl
                lg:p-3
            "
        >
            {digit} 
        </div>
     );
}

export default Digit;