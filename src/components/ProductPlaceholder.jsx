export function ProductPlaceholder (){
    return (

        <div class="bg-white p-2">
            {/* Header */}
            <header class="placeholder-glow">
                {/* Title */}
                <h1 class='fs-5 fw p-2 text-uppercase text-end'>
                    <span class="placeholder col-6"></span>
                </h1>
                {/* Image */}
                <svg class="bd-placeholder-img placeholder w-100" xmlns='http://www.w3.org/2000/svg' role="img" aria-label="Placeholder" preserveAspectRatio='xMidYMid slice' focusable='false'>
                    <title>Placeholder</title>
                    <rect width='100%' height='100%' ></rect>
                </svg>
            </header>
            {/* Nav */}
            <nav aria-label='breadcrumb'>
                    <ol class='breadcrumb m-0 py-1 placeholder-glow'>
                    <li class="col-3">
                        <span class="placeholder col-11"></span>
                    </li>
                    <li class='col-3'>
                        <span class="placeholder col-11"></span>
                    </li>
                    </ol>
            </nav>
            {/* Text */}
            <div class="row placeholder-glow">
                    <div class="py-1">
                    <span class="placeholder col-12"></span>
                    </div>
                    <div class="py-1">
                    <span class="placeholder col-12"></span>
                    </div>
            </div>
            {/* Form */}
            <div class='row placeholder-glow'>
                    <div class="col-6">
                    <span class="placeholder col-11"></span>
                    </div>
                    <div class="col-6">
                    <span class="placeholder col-11"></span>
                    </div>
                    <div class="col-6">
                    <span class="placeholder col-11"></span>
                    </div>
                    <div class="col-6">
                    <span class="placeholder col-11"></span>
                    </div>
            </div>
            {/* Buttons */}
            <div class="row placeholder-glow">
                    <div class="py-1">
                    <span class="placeholder col-12"></span>
                    </div>
            </div>
        </div>
    )
}
