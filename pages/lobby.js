import LobbyHeader from "../components/lobby/LobbyHeader"
import CardElement from "../components/lobby/CardElement"
import Navbar from "../components/Navbar"
import CalendarElement from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function Lobby({ data }) {

  //this is a minor change
 
    return (
        <div>
            <Navbar />
            <LobbyHeader />
            <div class="grid grid-cols-2 gap-4">
                <div>
                    {data.data.map(e => { return (<CardElement data={e} />) })}
                </div>
                <CalendarElement />
            </div>
        </div>
    )
}

// → getServerSideProps only work under the folder <pages> "
export async function getServerSideProps() {
    const res = await fetch(`http://localhost:4000/courses`)
    const data = await res.json()
    return { props: { data } }
}