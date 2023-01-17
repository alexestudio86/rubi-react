export function SearchForms () {
    return (
        <form className='d-flex'>
            <input type='text' className='form-control me-2' type='search' placeholder='Buscar' aria-label='Search' />
            <button className="w3-button w3-ligh-gray w3-border w3-border-light-gray">
                <span className="fa-solid fa-magnifying-glass"></span>
            </button>
        </form>
    )
}