import EventsBody from "../components/eventsbody"
import EventsTop from "../components/eventstop"
import Footer from "../components/footer"
import Nav from "../components/nav"

export default function ScheduleEvents() {
    return (
        <div className="flex flex-col h-[100vh]">
            <Nav />
            <EventsTop />
            <EventsBody />
            <Footer />
        </div>
    )
}