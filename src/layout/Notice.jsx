import { Notices } from "../components/notice/Notices"


export function Notice ( ){
    const noticeText = 'Aprovecha nuestros precios especiales';
    return (
        <>
            <Notices noticeBody={noticeText} />
        </>
    )
}