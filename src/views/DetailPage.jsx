import { useParams } from "react-router-dom";

export default function DetailPage() {
    const eventdetail = [
        { uid: "1", time: "Coldplay will play at 10 am" },
        { uid: "2", time: "Queen will play at 12 noon without Freddie, sorry!" }
    ];

    const { eventId } = useParams();
    const event = eventdetail.find((event) => event.uid === eventId);
    return (
        <div>
            The artist will perform: {event.time};
        </div>
    )
}