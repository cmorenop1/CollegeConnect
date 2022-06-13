import LobbyHeader from "../components/lobby/LobbyHeader";
import LobbyContent from "../components/lobby/LobbyContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Lobby() {
    return (
        <div>
            <Navbar />
            <LobbyHeader />
            <LobbyContent/>
            <Footer />
        </div>
    )
}