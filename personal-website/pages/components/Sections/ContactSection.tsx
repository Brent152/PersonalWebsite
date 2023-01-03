import { forwardRef } from "react";
import BlinkInElement from "../BlinkInElement";
import EmailIcon from "../EmailIcon";
import GitHubLogo from "../GitHubLogo";
import Line from "../Line";
import LinkedInLogo from "../LinkedInLogo";
import SegmentBreak from "../SegmentBreak";



const ContactSection = forwardRef((props, ref: any) => {


    return (
        <>
            <div ref={ref} className='section'>
                <div
                    className={` `}
                    style={{
                        display: 'flex',
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginBottom: 80,
                        marginTop: 50
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Line variant='mediumH' style={{ marginBlock: 30 }} />
                        <Line variant='mediumH' style={{ marginBlock: 30 }} />
                    </div>
                    {/* <Line style={{ position: 'relative', flexGrow: 0, transform: 'translate(-60px, 0px)' }} shownHeight={150} speedMs={300} />
                    <Line style={{ position: 'relative', flexGrow: 0, transform: 'translate(-30px, 0px)' }} shownHeight={300} speedMs={300} /> */}
                    <Line variant='mediumV' style={{ marginRight: 30 }} />

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <BlinkInElement className='headerText' speedMs={800} >Get In Touch</BlinkInElement>
                        <BlinkInElement className='paragraphText' style={{ maxWidth: 600, marginTop: '1.5vh' }}>
                            {`If you have any questions or just want to say hi,
                                please don't hesitate to reach out!`}
                            <br />
                            brentjulius152@gmail.com
                            <div style={{ height: '1vh' }} />
                            <LinkedInLogo link={`https://www.linkedin.com/in/brent-julius/`} />
                            <GitHubLogo link={`https://github.com/Brent152`} style={{ marginLeft: 15 }} />
                            <EmailIcon link={`https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxwNHtgTHrrdkrwVFWQtPNFjhmKPhFZvdvgXPkMdhGDhztRxxdcDLNLnZMWQJfTRZRSLzh`} style={{ marginLeft: 15 }} />
                        </BlinkInElement>
                    </div>
                    <Line variant='mediumV' style={{ marginLeft: 30 }} />

                    {/* <Line style={{ position: 'relative', flexGrow: 0, transform: 'translate(30px, 0px)' }} shownHeight={300} speedMs={300} />
                    <Line style={{ position: 'relative', flexGrow: 0, transform: 'translate(60px, 0px)' }} shownHeight={150} speedMs={300} /> */}

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Line variant='mediumH' style={{ marginBlock: 30 }} />
                        <Line variant='mediumH' style={{ marginBlock: 30 }} />
                    </div>
                </div>
            </div>
            <SegmentBreak />

            <div style={{ backgroundColor: 'black', height: 50 }} />
        </>
    )

})

ContactSection.displayName = 'ContactSection'
export default ContactSection