import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThankYou } from '../components/greetings/ThanYou';
import { useCarContext, useUpdateCarContext, useGuestNameContext } from "../context/CarProvider";


export function Gratitude ( ){

    // Redirect
    const navigate = useNavigate()

    // Recovery car data
    const car           =   useCarContext();
    const updateCar     =   useUpdateCarContext();
    // Recovery guest Name
    const guestName     = useGuestNameContext();

    // Whatsapp number
    const whatsappNumber = 5543814943
    // Saludo
    const introText = encodeURIComponent(`_Hola, me gustaría ordenar_\n`);    
    // Texto
    const bodyText = car.map( c => (
        c.variants.map( v => (
            encodeURIComponent(`${v.quantity} x ${c.name} | ${v.name} - $${v.quantity*v.price}\n`)
        ) )
    ) ).join('');
    // Cantidad
    const dinero = car.map( c => (
        c.variants.reduce( (sum, variant) => (typeof variant.quantity === 'number' ? sum + (variant.quantity*variant.price) : sum), 0 )
    ) )
    // Divisiòn
    const dineroTotal = encodeURIComponent(`____________________\nTotal: ${dinero}\n`)
    // Final message
    const finalText = encodeURIComponent(`\nA nombre de: *${guestName}*`);
    // Link
    const link = `https://wa.me/${whatsappNumber}/?text=${introText}${bodyText}${dineroTotal}${finalText}`

    useEffect(() => {
        const timer = setTimeout(() => {
            updateCar({actionType: 'CLEAR_ALL'},{})
            window.location.replace(link)
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <ThankYou />
            <a href={link}>link</a>
        </>
    )
}