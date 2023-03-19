import autosize from 'autosize'
import { useEffect, useRef } from 'react'

export const useAutosize = () => {
    const ref = useRef()

    useEffect(() => {
        autosize(ref.current)

        return () => {
            autosize.destroy(ref.current)
        }
    }, [])

    return ref
}