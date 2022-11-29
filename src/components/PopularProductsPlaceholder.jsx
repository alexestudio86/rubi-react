import { BackgroundSVG } from "./BackgroundSVG"

export function PopularProductsPlaceholder (){
    return (
        <div className='card' aria-hidden='true'>
            <div className='placeholder-glow'>
                {/* Image */}
                <BackgroundSVG />
                {/* Title */}
                <div className='card-body'>
                    <h5 className='card-title placeholder-glow text-end'>
                        <span className="placeholder col-8"></span>
                    </h5>
                </div>
            </div>
        </div>
    )
}
