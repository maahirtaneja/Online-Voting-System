import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserSidebar from './UserSidebar';

const PartyInfo = () => {
    const SERVER_URL = import.meta.env.VITE_SERVER_URL;
    const [party, setParty] = useState({});
    const { partyId } = useParams();

    const storedUser = localStorage.getItem("voterUser") ? localStorage.getItem("voterUser") : null;
    const user = storedUser ? JSON.parse(storedUser) : null;

    useEffect(() => {
        getData();
    }, []);
    async function getData() {
        try {
            const res = await fetch(`${SERVER_URL}/party/${partyId}`);
            const result = await res.json();

            if (result.success) {
                setParty(result.data);
            } else {
                console.error("Failed to fetch party info");
            }
        } catch (error) {
            console.error("Error fetching party info:", error);
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#141827] relative text-white">
            {/* Header with Home button */}
            <header className="p-4 flex justify-end items-center absolute right-2">
                <Link to='/' className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center gap-2 transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    Home
                </Link>
            </header>

            {/* Main Content */}
            <div className="flex flex-1">
                {/* Left Sidebar - takes about 25% width */}
                <div className="w-1/4 bg-gray-800">
                    <UserSidebar user={user} />
                </div>

                {/* Right Content Area - takes about 75% width */}
                <div className="flex flex-col gap-4 w-3/4 overflow-y-auto px-5 py-2">
                    <h2 className='font-bold text-3xl'>{party?.name}</h2>

                    <p className='text-gray-500'>Agenda: {party?.agenda}</p>

                    <h3 className='font-bold text-md'>Head: {party?.headname}</h3>

                    <p className=''>Members:</p>
                    <ul>
                        {party?.members?.map((member, idx) => (
                            <li key={idx}>{member}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PartyInfo