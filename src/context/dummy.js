const car = [
	{
		name: 'Alex',
		lastName: 'Ruiz',
		pets: [
			{
				name: 'nala',
				type: 'dog'
			}
		]
	},
	{
		name: 'Marcela',
		lastName: 'Alcántara',
		pets: [
			{
				name: 'maya',
				type: 'dog'
			},
			{
				name: 'ambrosio',
				type: 'fish'
			}
		]
	}
];


( () => {
	console.log('car:', car)
	const newCar = car.map( c => {
		if(c.name === 'Marcela'){
			const { pets } = c
			return (
                {
                    ...c,
                    pets: pets.map( p => {
                                if( p.name === 'ambrosio' ){
                                    return (
                                        {
                                            ...p,
                                            name: 'rufo',
                                            type: 'cat'
                                        }
                                    )
                                }
                                return p
                            }
                          )
                }
			)
		}
		return c
	})
	console.log('newCar:', newCar )

})();