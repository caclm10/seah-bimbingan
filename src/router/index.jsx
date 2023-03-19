import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ConsultationPage from "../pages/ConsultationPage"
import CreateConsultationPage from "../pages/CreateConsultationPage"
import CreateMeetingPage from "../pages/CreateMeetingPage"
import EditConsultationPage from "../pages/EditConsultationPage"
import EditMeetingPage from "../pages/EditMeetingPage"
import IndexPage from "../pages/IndexPage"
import MeetingPage from "../pages/MeetingPage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <IndexPage />,
                handle: {
                    name: 'index'
                },
            },
            {
                path: 'consultations',
                children: [
                    {
                        path: 'create',
                        element: <CreateConsultationPage />
                    },
                    {
                        path: ':consultationId',
                        children: [
                            {
                                path: '',
                                element: <ConsultationPage />
                            },
                            {
                                path: 'edit',
                                element: <EditConsultationPage />
                            },
                            {
                                path: 'meetings',
                                children: [
                                    {
                                        path: 'create',
                                        element: <CreateMeetingPage />
                                    },
                                    {
                                        path: ':meetingId',
                                        children: [
                                            {
                                                path: '',
                                                element: <MeetingPage />
                                            },
                                            {
                                                path: 'edit',
                                                element: <EditMeetingPage />
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                ],
            }
        ]
    }
])

export default router