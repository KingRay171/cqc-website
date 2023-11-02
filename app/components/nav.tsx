import Image from "next/image"
import Link from "next/link"

export default function Nav() {
  return (
    <div className="flex justify-between px-20 bg-[#0A304E]" >
      <div>
        <Image src={"/cqcLogo.png"} alt="CQC Logo" width={100} height={40}/>
      </div>
      <div className="py-2 space-x-5">
        <Link href="/">Home</Link>
        <Link href="/exec">Exec</Link>
        <Link href="/schedule-events">Club Schedule & Events</Link>
      </div>
    </div>
  )
}
