import ConsultationList from '../components/ConsultationList/ConsultationList'
import { useFabIcon, useFabTo, useMoreMenu } from '../hooks/use-app'

const IndexPage = () => {
    useFabTo(`/consultations/create`)
    useFabIcon("material-symbols:add")
    useMoreMenu()

    return (
        <>
            <ConsultationList />


        </>
    )
}

export default IndexPage