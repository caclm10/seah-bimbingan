import { del, get as getIdb, set as setIdb, update } from 'idb-keyval';
import { create } from 'zustand'
import produce from 'immer'
import { nanoid } from 'nanoid'

export const useConsultationStore = create((set, get) => ({
    list: [],
    init: async () => {
        const consultations = await getIdb('consultations')

        if (!consultations) {
            await setIdb("consultations", [])
        } {
            set({ list: consultations })
        }
    },
    find: id => get().list.find(l => l.id === id),
    add: async consultation => {
        const id = nanoid()

        const newConsultation = {
            ...consultation,
            meetings: [],
            id
        }

        set(produce(state => {
            state.list.push(newConsultation)
        }))

        await setIdb("consultations", get().list)

        return id
    },
    update: async (id, data) => {
        const index = get().list.findIndex(consultation => consultation.id === id)

        if (index === -1) {
            return
        }

        const updatedConsultation = {
            ...get().list[index],
            ...data
        }


        set(produce(state => {
            state.list[index] = updatedConsultation
        }))

        await setIdb("consultations", get().list)
    },

    delete: async id => {
        set(state => ({
            list: state.list.filter(consultation => consultation.id !== id)
        }))

        await setIdb("consultations", get().list)
    },

    deleteMeeting: async (consultationId, id) => {
        const consultationIndex = get().list.findIndex(consultation => consultation.id === consultationId)

        if (consultationIndex === -1) {
            return
        }

        set(produce(state => {
            state.list[consultationIndex].meetings = state.list[consultationIndex].meetings.filter(meeting => meeting.id !== id)
        }))

        await setIdb("consultations", get().list)
    },

    addMeeting: async (consultationId, data) => {
        const index = get().list.findIndex(consultation => consultation.id === consultationId)

        if (index === -1) {
            return null
        }

        const id = nanoid()

        set(produce(state => {
            state.list[index].meetings.push({
                ...data,
                id
            })
        }))

        await setIdb("consultations", get().list)

        return id
    },
    updateMeeting: async (consultationId, meetingId, data) => {
        const consultationIndex = get().list.findIndex(consultation => consultation.id === consultationId)

        if (consultationIndex === -1) {
            return
        }

        const meetingIndex = get().list[consultationIndex].meetings.findIndex(meeting => meeting.id === meetingId)

        if (meetingIndex === -1) {
            return
        }


        set(produce(state => {
            state.list[consultationIndex].meetings[meetingIndex] = {
                ...state.list[consultationIndex].meetings[meetingIndex],
                ...data,
            }
        }))

        await setIdb("consultations", get().list)
    },
}))