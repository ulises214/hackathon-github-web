const ModalEditar = ({  }) => {
  return (
    <>
      <div
        className="modal fade"
        id="editar_platillo"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {nombre}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"></div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEditar;
