import { useEffect, useRef } from "react";
import { Fragment } from "react";
export interface ModalProps {
  modalType: string;
  modalOpen: boolean;
  setModalOpen?: (open: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({
  modalType = null,
  modalOpen = false,
  setModalOpen = () => {},
}) => {
  if (!modalType) return null;

  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (modalOpen) dialog.showModal();
      else dialog.close();
    }
  }, [modalOpen]);

  const newTaskModal = (
    <Fragment>
      <div className="modal-box">
        <h3 className="font-bold text-lg">New Task Modal</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={() => setModalOpen(false)}>
              Close
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );

  const TaskModal = (
    <Fragment>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Task Modal</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={() => setModalOpen(false)}>
              Close
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );

  return (
    <dialog
      ref={dialogRef}
      id="my_modal_5"
      className="modal modal-bottom sm:modal-middle"
    >
      {/* <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={() => setModalOpen(false)}>
              Close
            </button>
          </form>
        </div>
      </div> */}
      {modalType === "new task" ? newTaskModal : TaskModal}
    </dialog>
  );
};

export default Modal;
