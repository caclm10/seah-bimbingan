import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, VStack } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { consultationFormSchema } from "../../config/consultation-config"

const ConsultationForm = ({ defaultValues = {}, onSubmit = () => { } }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(consultationFormSchema),
        defaultValues: {
            name: '',
            lecturer: '',
            ...defaultValues
        }
    })

    const handleForm = data => {
        console.log(data)
    }

    return (
        <VStack as="form" spacing={5} onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.name}>
                <FormLabel>Bimbingan</FormLabel>
                <Input bg="white" placeholder="Cth. Skripsi / PKL / Lomba" {...register("name")} />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.lecturer}>
                <FormLabel>Nama Pembimbing</FormLabel>
                <Input bg="white" {...register("lecturer")} />
                <FormErrorMessage>{errors.lecturer?.message}</FormErrorMessage>
            </FormControl>

            <Flex w="100%" justify="flex-end">
                <Button type="submit" colorScheme="purple">Simpan</Button>
            </Flex>
        </VStack>
    )
}

export default ConsultationForm