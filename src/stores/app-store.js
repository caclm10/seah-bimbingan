import { create } from 'zustand'

export const useAppStore = create((set) => ({
    backTo: '/',
    fabTo: '',
    fabIcon: '',
    moreMenu: [],
    confirm: {
        isOpen: false,
        title: '',
        isDelete: false,
        onConfirm: () => { }
    },
    setBackTo: value => set({ backTo: value }),
    setFabTo: value => set({ fabTo: value }),
    setFabIcon: value => set({ fabIcon: value }),
    setMoreMenu: value => set({ moreMenu: value }),
    setConfirm: value => set({ confirm: value })
}))