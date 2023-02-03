import { useUpdateGuestNameContext } from '../context/CarProvider'


export function Form ( { checkName, msg } ) {

    //Guest name
    const updateGuestName   = useUpdateGuestNameContext();

    return (
        <div className="container">
            <h1 className="fs-5">Ingresa tu nombre para continuar</h1>
            <div className="py-1">
                <form className="row py-3" onSubmit={ (e) => {
                    e.preventDefault();
                    checkName()
                } }>
                    <div className="col-auto">
                        <label htmlFor="inputName" className="col-form-label">
                            <i className="fas fa-user"></i>
                        </label>
                    </div>
                    <div className="col-auto">
                        <input id="inputName" type="text" className="form-control" placeholder="ej. José María" onChange={ e => updateGuestName( e.target.value ) }  />
                    </div>
                </form>
                <div className="row">
                { msg.length > 0 && <p className="text-danger text-center0">{msg}</p> }
                </div>
            </div>
            <hr />
        </div>
    )
}