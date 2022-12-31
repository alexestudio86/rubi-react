export function ProductPlaceholder (){
    return (

        <div className='bg-white p-2'>
            {/* Header */}
            <header className='placeholder-glow'>
                {/* Title */}
                <h1 className='fs-5 fw p-2 text-uppercase text-end'>
                    <span className='placeholder col-6'></span>
                </h1>
                {/* Image */}
                <svg className='bd-placeholder-img placeholder w-100' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Placeholder' preserveAspectRatio='xMidYMid slice' focusable='false'>
                    <title>Placeholder</title>
                    <rect width='100%' height='100%' ></rect>
                </svg>
            </header>
            {/* Nav */}
            <nav aria-label='breadcrumb'>
                <ol className='breadcrumb m-0 py-1 placeholder-glow'>
                    <li className='col-3'>
                        <span className='placeholder col-11'></span>
                    </li>
                    <li className='col-3'>
                        <span className='placeholder col-11'></span>
                    </li>
                </ol>
            </nav>
            {/* Text */}
            <div className='row placeholder-glow'>
                <div className='py-1'>
                    <span className='placeholder col-12'></span>
                    </div>
                    <div className='py-1'>
                    <span className='placeholder col-12'></span>
                </div>
            </div>
            {/* Form */}
            <div className='row placeholder-glow'>
                    <div className='col-6'>
                    <span className='placeholder col-11'></span>
                    </div>
                    <div className='col-6'>
                    <span className='placeholder col-11'></span>
                    </div>
                    <div className='col-6'>
                    <span className='placeholder col-11'></span>
                    </div>
                    <div className='col-6'>
                    <span className='placeholder col-11'></span>
                    </div>
            </div>
            {/* Buttons */}
            <div className='row placeholder-glow'>
                <div className='py-1'>
                <span className='placeholder col-12'></span>
                </div>
            </div>
        </div>
    )
}
