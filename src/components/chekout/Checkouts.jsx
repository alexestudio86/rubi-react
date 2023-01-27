import { useCarContext } from "../../context/CarProvider"

export function Checkouts ( ) {

    const car = useCarContext()

    return (
        <ul className="list-group">
            { car && car.map( (c,i) => (
                    <li key={i} className="ist-group-item bg-white m-0 my-1 p-1">
                        <div class='row m-0 p-0'>
                            <div class='col-3 p-0'>
                                <img class='rounded w-100' v-bind='{alt: c.title, src: c.picture}'/>
                            </div>
                            <div class='col-9 p-0 text-end'>
                                <h1 class='fs-4 m-0'>{ c.name }</h1>
                                <p class='text-secondary m-0'>1 x <span class='price'>{ c.price }</span></p>
                                <span class='fw-bold price text-success'>{ c.quantity * c.price }</span>
                            </div>
                        </div>
                        <div class='row m-0 p-0'>
                            <div class='col-4 p-0 d-flex justify-content-center align-items-center'>
                                <button class='btn' type="button" data-bs-toggle="modal" data-bs-target="#deleteModal" >
                                    <i class='far fa-trash-alt text-danger fs-2'/>
                                </button>
                            </div>
                            <div class='col-8 p-0'>
                                <div class='rounded border border-secondary d-flex justify-content-between align-items-center'>
                                    <button class='btn text-danger fs-3 px-3 py-0' >&#8722;</button>
                                    <span class='fs-3'>{ c.quantity }</span>
                                    <button class='btn text-primary fs-3 px-3 py-0' >+</button>
                                </div>
                            </div>
                        </div>
                    </li>
                ) )
            }
        </ul>
    )
}