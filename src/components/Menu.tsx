import "./menu.module.css";
import Modal, { ModalProps } from "./Modal";
export interface MenuProps extends ModalProps {

}

const Menu: React.FC<MenuProps> = ({modalType = "new task", modalOpen = false, setModalOpen = () => { } }) => {
    return (
        <>
            <ul
                className="menu menu-horizontal  rounded-box mt-6 "
                onClick={() => setModalOpen(true)}
            >
                <li>
                    <button className="tooltip" data-tip="Add New Task">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="gray"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h18v18H3zM12 8v8m-4-4h8"
                            />
                        </svg>
                    </button>
                </li>
                <li>
                    <a className="tooltip" data-tip="Stats">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="gray"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                        </svg>
                    </a>
                </li>
                <li>
                    <a className="tooltip" data-tip="About Me">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="gray"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </a>
                </li>
            </ul>
            <Modal
                modalType={modalType}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
            />
        </>
    );
};

export default Menu;
