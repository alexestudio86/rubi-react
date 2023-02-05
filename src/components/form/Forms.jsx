import { useUpdateGuestNameContext } from '../../context/CarProvider';


export function ContactForm ( { msg, checkName } ) {

    //Guest name
    const updateGuestName   = useUpdateGuestNameContext();


    return (

        <div className="py-1">
            <form className="w3-row py-3" onSubmit={ (e) => {
                    e.preventDefault();
                    checkName()
                } }>
                    <div className="w3-col-auto">
                        <label htmlFor="inputName" className="col-form-label">
                            <i className="fas fa-user"></i>
                        </label>
                    </div>
                    <div className="col-auto">
                        <input id="inputName" type="text" className="form-control w-100" placeholder="ej. José María" onChange={ e => updateGuestName( e.target.value ) }  />
                    </div>
            </form>
            <div className="row">
                { msg.length > 0 && <p className="text-danger text-center0">{msg}</p> }
            </div>
        </div>
    )
}