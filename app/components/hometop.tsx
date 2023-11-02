import Image from "next/image"
export default function HomeTop() {
    return (
        <section className="h-[800px] w-screen bg-bg1 bg-no-repeat bg-cover flex flex-col items-center"> 
            <h1 className="pt-28 text-7xl font-homeheader">Case Quantum Computing</h1>
            <h2 className="text-2xl">learn about the future with us</h2>
            <div className="flex space-x-10 pt-5">
                <a href="https://community.case.edu/cqc/home/">
                    <Image src='/campus-groups.png' alt="discord" width={150} height={150} className="rounded-[35px]"/>
                </a>
                <a href="https://discord.gg/XTYjyrpyVP">
                <Image src='/discord.jpg'  alt="campusgroups" width={150} height={150} className="rounded-[35px]" />
                </a>
            </div>

        </section>
    )
}