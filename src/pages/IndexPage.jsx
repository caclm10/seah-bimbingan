import ConsultationList from '../components/ConsultationList/ConsultationList'
import { useBackTo, useFabIcon, useFabTo, useMoreMenu } from '../hooks/use-app'

const IndexPage = () => {
    useBackTo("#")
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