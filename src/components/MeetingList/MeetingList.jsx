import { Text } from "@chakra-ui/react"
import { DateTime } from "luxon"
import { useMemo } from "react"
import List from "../Common/List/List"
import MeetingListItem from "./MeetingListItem"

const MeetingList = ({ consultation }) => {

    const sortedMeetings = useMemo(() => {
        if (consultation.meetings && consultation.meetings.length > 0) return [...consultation.meetings].sort((a, b) => DateTime.fromISO(b.date) - DateTime.fromISO(a.date))

        return []
    }, [consultation])

    if (!consultation.meetings || consultation.meetings.length === 0) return (
        <Text align="center" color="gray.400" fontSize="xl" mt={16}>Belum ada pertemuan</Text>
    )


    return (
        <List>
            {sortedMeetings.map(meeting => <MeetingListItem key={meeting.id} meeting={meeting} consultationId={consultation.id} />)}
        </List>
    )
}

export default MeetingList