export function Carousels ( { slides } ){
    return (
        <>
            { slides.map( (slide, index) => (
                <div key={index} className={ ( index == 0 && 'active' ) + ' carousel-item'}>
                    <img src={ slide.slideUrl } className='d-block w-100' alt={ slide.slideTitle } />
                </div>
            ) ) }
        </>
    )
}
