export function NavCompact(){
    return (
        <>
            <nav class="navbar navbar-dark bg-dark sticky-top">
                <div class="container">
                    <a class="btn" href='/'>
                        <i class="fas fa-home fa-2x text-white"></i>
                    </a>
                    <a class="btn btn-dark d-block d-sm-none" href='/checkout'>
                        <i class="fas fa-shopping-cart fa-lg me-1"></i>
                        <span class="badge rounded-pill bg-danger">0</span>
                    </a>
                </div>
            </nav>
        </>
    )
}