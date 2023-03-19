import { useCallback, useEffect } from "react"
import { useAppStore } from "../stores/app-store"

export const useBackTo = (to = '') => {
    const setBackTo = useAppStore(state => state.setBackTo)

    useEffect(() => {
        setBackTo(to)
    }, [])
}

export const useFabTo = (to = '') => {
    const setFabTo = useAppStore(state => state.setFabTo)

    useEffect(() => {
        setFabTo(to)
    }, [])
}

export const useFabIcon = (icon = '') => {
    const setFabIcon = useAppStore(state => state.setFabIcon)

    useEffect(() => {
        setFabIcon(icon)
    }, [])
}

export const useMoreMenu = (menu = []) => {
    const setMoreMenu = useAppStore(state => state.setMoreMenu)

    useEffect(() => {
        setMoreMenu(menu)
    }, [])
}

export const useConfirm = () => {
    const setConfirm = useAppStore(state => state.setConfirm)

    const confirm = useCallback(({ title = '', isDelete = false, onConfirm = () => { } }) => {
        setConfirm({
            isOpen: true,
            title,
            isDelete,
            onConfirm
        })
    }, [])

    return confirm
}