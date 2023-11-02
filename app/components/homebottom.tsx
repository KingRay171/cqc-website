import Image from "next/image"

export default function HomeBottom() {
    return (
        <section className="flex bg-gray-200 text-black justify-center space-x-32 py-8">
            <Image src='/qubit.png' alt="Quantum Bit" width={400} height={100}/>
            <div className="border-solid border-2 border-black rounded-[50px] flex flex-col p-12" >
                <h1 className="text-7xl pb-4">Upcoming Events:</h1>
                <ul className="max-w-[40vw] text-2xl "> 
                    <li>General Body Meeting V: 11/3</li>
                    <li>Fall Fest: 11/6-11/12</li>
                    <li>General Body Meeting VI: 11/17</li>
                    
                </ul>
            </div>
            
        </section>
    )
}