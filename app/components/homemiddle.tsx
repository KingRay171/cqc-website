import Image from "next/image"

export default function HomeMiddle() {
    return (
        <section className="flex bg-white text-black justify-center space-x-20 py-8">
            <div className="border-solid border-2 border-black rounded-[50px] flex flex-col p-12">
                <h1 className="text-6xl">Our Mission Statement:</h1>
                <p className="max-w-[40vw] text-2xl"> 
                    The Case Quantum Computing club aims to provide 
                    resources and a community for anyone interested 
                    in quantum computing and quantum information 
                    science. Through workshops, hackathons, and 
                    connections with professionals in the field, 
                    we will provide opportunities to learn about and 
                    get involved with this rapidly growing field.
                </p>
            </div>
            <Image src='/quantumgates.png' alt="Quantum Gates" width={400} height={100}/>
        </section>
    )
}