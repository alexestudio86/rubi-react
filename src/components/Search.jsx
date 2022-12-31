export function Search () {
    return (
        <div className='bg-secondary'>
            <div className='container py-5 bg-white'>
                <form className='d-flex'>
                    <input type='text' className='form-control me-2' type='search' placeholder='Buscar' aria-label='Search' />
                    <button>Buscar</button>
                </form>
            </div>
        </div>
    )
}