export function PopularProductsPlaceholder (){
    return (
        <div className='col-md-4'>
            <div className='card' aria-hidden='true'>
                <div className='placeholder-glow'>
                    {/* Image */}
                    <svg className='bd-placeholder-img placeholder w-100' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Placeholder' preserveAspectRatio='xMidYMid slice' focusable='false'>
                        <title>Placeholder</title>
                        <rect width='100%' height='100%' ></rect>
                    </svg>
                    {/* Title */}
                    <div className='card-body'>
                        <h5 className='card-title placeholder-glow text-end'>
                            <span className="placeholder col-8"></span>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
