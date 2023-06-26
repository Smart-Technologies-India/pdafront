import { create } from "zustand";

enum SideBarTabs {
    Dashborad,
    Services,
    ZoneInfo,
    Rti,
    Petroleum,
    OldCopy,
    DesignPoint
}

interface SideBarState {
    isOpen: boolean;
    change: (value: boolean) => void;
    currentIndex: SideBarTabs;
    changeTab: (value: SideBarTabs) => void;
}

const sideBarStore = create<SideBarState>()((set) => ({
    isOpen: false,
    change: (value) => set((state) => ({ isOpen: value })),
    currentIndex: SideBarTabs.Dashborad,
    changeTab: (value) => set((state) => ({ currentIndex: value })),
}));

export default sideBarStore;

export { SideBarTabs };
