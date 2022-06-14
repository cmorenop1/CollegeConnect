import LobbyHeader from "../components/lobby/LobbyHeader";
import CardElement from "../components/lobby/CardElement";
import Navbar from "../components/Navbar";
// import LobbyCards from "../components/lobby/LobbyCards";
// import Footer from "../components/Footer";

export default function Lobby({ data }) {
    return (
        <div>
            <Navbar />
            <LobbyHeader />

            {data.map(e => {
                return (
                    <CardElement element={e} />
                )
            })}
        </div>
    )
}

// → getServerSideProps only work under the folder <pages> "
export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3001/courses`)
    const data = await res.json()
    return { props: { data } }
}