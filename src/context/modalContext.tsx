import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
    modalType: string ;
    setmModalType: (mt: string ) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setmModalType] = useState("task");

    return (
        <ModalContext.Provider value={{ modalOpen, setModalOpen, modalType, setmModalType }}>
            {children}
        </ModalContext.Provider>
    );
};
