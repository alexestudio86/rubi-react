import { WhatsappShareButton, FacebookShareButton, EmailShareButton } from 'react-share';

export function ShareButtons ( ){
    return (
        <div className='d-flex justify-content-center'>
            <div className='w3-padding-small'>
                <WhatsappShareButton url={window.location.href}>
                    <i className="fa-brands fa-whatsapp w3-text-green w3-xxlarge"></i>
                </WhatsappShareButton>
            </div>
            <div className='w3-padding-small'>
                <FacebookShareButton url={window.location.href} >
                <i className="fa-brands fa-facebook w3-text-blue w3-xxlarge"></i>
                </FacebookShareButton>
            </div>
            <div className="w3-padding-small">
                <EmailShareButton url={window.location.href}>
                    <i className="fa-solid fa-envelope w3-xxlarge"></i>
                </EmailShareButton>
            </div>
        </div>
    )
}