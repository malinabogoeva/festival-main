import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function StagePage() {
    const stageevents = [
        { stageid: "1", eventtext: "Coldplay", uid: "1", category: "Pop" },
        { stageid: "1", eventtext: "Queen", uid: "2", category: "Rock" },
        { stageid: "1", eventtext: "Toto", uid: "4", category: "Pop" },
        { stageid: "1", eventtext: "Van Morisson", uid: "3", category: "folk" },
        { stageid: "2", eventtext: "Billie Eilish", uid: "5", category: "Pop" },
        { stageid: "2", eventtext: "Lady Gaga", uid: "6", category: "Pop" },
        { stageid: "1", eventtext: "Phoebe Bridgers", uid: "7", category: "Folk" },
        { stageid: "2", eventtext: "Chappell Roan", uid: "8", category: "Pop" }
    ];

    const { stageId } = useParams(); // Get stageId from link
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Filter events based on stageId
    const events = stageevents.filter(event => event.stageid === stageId);

    // Further filter by search term and category
    const filteredEvents = events.filter(event => {
        const matchesSearch = event.eventtext.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="Box">
            <div>
                <label>Search by artist:</label>
                <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for artist"
                />
            </div>

            <div className="card">
                <label >Filter by category:</label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="all">ALL</option>
                    <option value="Pop">Pop</option>
                    <option value="Rock">Rock</option>
                    <option value="folk">folk</option>
                </select>
            </div>

            <h2>List of events on stage {stageId}</h2>
            {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                    <div key={event.uid}>
                        <Link to={`/festival/detailpage/${event.uid}`}>{event.eventtext}</Link>
                    </div>
                ))
            ) : (
                <p>No events found.</p>
            )}
        </div>
    );
}
