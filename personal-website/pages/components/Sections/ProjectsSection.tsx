import { forwardRef } from "react";
import BlinkInElement from "../BlinkInElement";
import SegmentBreak from "../SegmentBreak";
import ListLine from "../ListLine";
import ListItem from "../ListItem";


const ProjectsSection = forwardRef((props: any, ref: any) => {

    return (
        <>
            <div className='section'>
                <div
                    className={` `}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignSelf: 'center',
                        alignItems: 'flex-start',
                        marginBottom: 80,
                        marginTop: 50,
                        width: 1000
                    }}
                >

                    <BlinkInElement className='headerText'>Projects</BlinkInElement>
                    <ListLine />
                    <ListItem
                        title={'Sorting Algorithm Visualizer'}
                        gitHubLink={'https://github.com/Brent152/Sorting-Algorithm-Visualizer'}
                        subtitle={'- React -'}
                        text={
                            `Static page intended to enhance the user's understanding of the basic sorting algorithms.`
                        }
                    />
                    <ListLine />
                    {/* Anchor for scroll jump */}
                    <div ref={ref} />
                    <ListItem
                        title={'Mindful'}
                        gitHubLink={'https://github.com/emibtsu/Mindful'}
                        subtitle={' - React Native - Expo - SQL -'}
                        text={
                            `A social journaling platform intended to revolutionize the way we interact with social media.`
                        }
                    />
                    <ListLine />
                </div >
            </div>
            <SegmentBreak />
        </>
    )

})


ProjectsSection.displayName = 'ProjectsSection'
export default ProjectsSection