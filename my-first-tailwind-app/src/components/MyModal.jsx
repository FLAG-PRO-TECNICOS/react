function MyModal({ id, buttonTitle, modalTitle, modalText }) {
  return (
    <>
      <button
        className="btn btn-soft btn-info"
        onClick={() => document.getElementById(id).showModal()}
      >
        {buttonTitle}
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{modalTitle}</h3>
          <p className="py-4">{modalText}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
export default MyModal;
