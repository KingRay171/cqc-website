import Image from "next/image"

export default function ExecBody() {
    const execList = [
        {name: "Caden Kacmarynski - President", major: "Engineering Physics B.S.E.", year: "Senior", linkedin: "/caden-kacmarynski", image: "/Caden.jpg"},
        {name: "Xavier Moskala - Vice President", major: "Physics B.S.", year: "Senior", linkedin: "/xmoskala", image: "/Xavier.jpg"},
        {name: "Casey Burhanna - Treasurer", major: "Electrical Engineering B.S.E", year: "Senior", linkedin: "/casey-burhanna", image: "/Casey.jpg"},
        {name: "Pranav Dhinakar - Secretary", major: "Computer Science B.S.", year: "Junior", linkedin: "/pranav-dhinakar-373115133", image: "/Pranav.jpg"},
    ]
    return (
        <section className="flex justify-around bg-gray-200 text-black py-8">
            {execList.map(e => (
                <div className="flex flex-col">
                    <Image src={e.image} alt={e.name} width={200} height={200} />
                    <h1>{e.name}</h1>
                    <h3>Major: {e.major}</h3>
                    <h3>Year: {e.year}</h3>
                    <h3>LinkedIn: <a href={`https://www.linkedin.com/in${e.linkedin}`}>{e.linkedin}</a></h3>
                </div>
            ))}
        </section>
    )
}