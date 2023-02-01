export function Form ( ) {
    return (
        <div className="container">
            <h1 className="fs-5">Ingresa tu nombre para continuar</h1>
            <div className="py-1">
                <form>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="inputPassword6" className="col-form-label">
                                <i className="fas fa-user"></i>
                            </label>
                        </div>
                        <div className="col-auto">
                            <input id="inputName" type="text" className="form-control" />
                        </div>
                    </div>
                </form>
            </div>
            <hr />
        </div>
    )
}