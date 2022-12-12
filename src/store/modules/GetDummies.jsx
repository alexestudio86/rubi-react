export function GetDummies ( {dummyResponse} ){
    console.log( dummyResponse )
    return (
        <>
        <h1>{dummyResponse.title}</h1>
        <p>{dummyResponse.body}</p>
        {/*

            { dummyResponse.map( dummyR =>
                <article key={dummyR.id}>
                    <h1>{dummyR.title}</h1>
                    <p>{ dummyR.body }</p>
                </article>
            )}

        */}
        </>
    )
}