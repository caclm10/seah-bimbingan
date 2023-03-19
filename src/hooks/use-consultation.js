import { useMemo } from "react"
import { useConsultationStore } from "../stores/consultation-store"

export const useFindConsultation = (consultationId) => {
    const findConsultation = useConsultationStore(state => state.find)
    const consultation = useMemo(() => findConsultation(consultationId), [consultationId])

    return consultation
}

export const useFindMeeting = (consultationId, meetingId) => {
    const consultation = useFindConsultation(consultationId)
    const meeting = useMemo(() => consultation.meetings.find(meeting => meeting.id === meetingId), [consultationId])

    return meeting
}