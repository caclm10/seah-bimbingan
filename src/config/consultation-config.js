import * as yup from "yup"

export const consultationFormSchema = yup.object({
    name: yup.string().required("Nama harus diisi."),
    lecturer: yup.string().required("Nama pembimbing harus diisi")
})

export const meetingFormSchema = yup.object({
    topic: yup.string().required("Topik harus diisi."),
    date: yup.string().required("Tanggal harus diisi."),
    note: yup.string().nullable()
})