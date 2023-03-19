import { DateTime } from "luxon"
import ListItem from "../Common/List/ListItem"

const MeetingListItem = ({ meeting, consultationId }) => {
    return (
        <ListItem
            to={`/consultations/${consultationId}/meetings/${meeting.id}`}
            title={meeting.topic}
            body={`Tanggal: ${DateTime.fromISO(meeting.date, { locale: 'id' }).toLocaleString(DateTime.DATETIME_FULL)}`}
        />
    )
}

export default MeetingListItem