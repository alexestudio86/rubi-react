export function ArchivePlaceholder (){
    return (
        <article className='row'>
            {/* Header */}
            <header className='placeholder-glow col-md-9 p-2'>
                {/* Title */}
                <h1 className='fs-4 card-title'>
                    <span className='placeholder col-8'></span>
                </h1>
                <span className='placeholder fs-5 col-3 py-3 my-3' ></span>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='placeholder col-4'></span>
                    <span className='placeholder col-1'></span>
                </div>
            </header>
            {/* Buttons */}
            <div className='placeholder-glow col-md-3'>
                {/* Image */}
                <svg className='bd-placeholder-img placeholder w-100' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Placeholder' preserveAspectRatio='xMidYMid slice' focusable='false'>
                    <title>Placeholder</title>
                    <rect width='100%' height='100%' ></rect>
                </svg>
            </div>
        </article>
    )
}
