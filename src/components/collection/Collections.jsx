import { Link } from "react-router-dom";
import { getAllCategories } from "../../context/jsonCalls";


export function Collections ( ) {
    const categories = getAllCategories();

    return (
        <div className="container bg-white">
            <div className="py-3">
                <h1 className="w3-light-gray w3-center py-1">Categorías</h1>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
                { categories ? categories.map( (category, index) => (
                    <div className="w3-quarter p-2" key={index}>
                        <div className="d-flex justify-content-center">
                            <Link to={category.url} className="w3-display-container w3-circle w3-hover-gray w3-hover-text-white" style={ {backgroundColor: '#f1f1f1', width: '200px', height: '200px'} }>
                                <div className="w3-display-middle w3-center" >
                                    <span className="fs-4" >{ category.name }</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                ) ) : <span>Sin categorías</span> }
            </div>
        </div>
    )
}