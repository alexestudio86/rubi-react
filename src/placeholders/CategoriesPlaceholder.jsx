import { BackgroundSVG } from "../BackgroundSVG";

export function CategoriesPlacesholder(){
    return (
        <div className='display-container py-4'>
            <div className='placeholder-glow'>
                <BackgroundSVG />
            </div>
            <h5 className="display-middle">
                <span className='placeholder'>Label 01</span>
            </h5>
        </div>
    )
}