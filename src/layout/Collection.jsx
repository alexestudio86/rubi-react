import { Link } from "react-router-dom";
import { getAllCollections } from "../context/jsonCalls";


export function Collection ( ) {

    const collections = getAllCollections();

    return (
        <div className="container bg-white">
            <div className="py-3">
                <h1 className="w3-light-gray w3-center py-1">Collections</h1>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
                { collections ? collections.map( (collection, index) => (
                    <div className="w3-quarter p-2" key={index}>
                        <div className="d-flex justify-content-center">
                            <Link to={collection.url} className="w3-display-container w3-circle w3-hover-gray w3-hover-shadow" style={ { backgroundImage: `url('${collection.image}')`, backgroundColor: '#f1f1f1', height: '200px', width: '200px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'} }>
                                <div className="w3-display-middle w3-center" >
                                    <span className="fs-4" >{ collection.name }</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                ) ) : <span>Sin colecciones</span> }
            </div>
        </div>
    )
}