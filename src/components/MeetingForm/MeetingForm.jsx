import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import ResizeTextarea from "react-textarea-autosize"
import { meetingFormSchema } from "../../config/consultation-config"

const MeetingForm = ({ defaultValues = {}, onSubmit = () => { } }) => {

    const { register, handleSubmit, formState: { errors, } } = useForm({
        resolver: yupResolver(meetingFormSchema),
        defaultValues: {
            topic: '',
            date: '',
            note: '',
            ...defaultValues
        }
    })

    return (
        <VStack as="form" spacing={5} onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.topic}>
                <FormLabel>Topik</FormLabel>
                <Input bg="white" {...register("topic")} />
                <FormErrorMessage>{errors.topic?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.date}>
                <FormLabel>Tanggal</FormLabel>
                <Input type="datetime-local" bg="white" {...register("date")} />
                <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.note}>
                <FormLabel>Catatan</FormLabel>
                <Textarea
                    as={ResizeTextarea}
                    bg="white"
                    resize="none"
                    {...register("note")}
                />
                <FormErrorMessage>{errors.note?.message}</FormErrorMessage>
            </FormControl>

            <Flex w="100%" justify="flex-end">
                <Button type="submit" colorScheme="purple">Simpan</Button>
            </Flex>
        </VStack>
    )
}

export default MeetingForm