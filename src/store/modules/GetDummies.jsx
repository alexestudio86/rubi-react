export function GetDummies ( {dummyResponse} ){

    console.log( dummyResponse );

    const getImage = ( img ) => {
        return img[0].url
    }

    const getLabel = ( label ) => {
        return label[0]
    }

    return (
        <>
        <h1>{dummyResponse.title}</h1>
        {/* <img className='w-100' alt={dummyResponse.title} src={ getImage(dummyResponse.images) } />
        <p className='breadcrumb-item category text-primary'>{ getLabel(dummyResponse.labels) }</p> */}
        </>
    )
}