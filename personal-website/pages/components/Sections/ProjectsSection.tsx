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
                            `A static page intended to improve the user's understanding of the basic sorting algorithms.`
                        }
                    />
                    <ListLine />

                    {/* Anchor for scroll jump */}
                    <div ref={ref} />

                    <ListItem
                        title={'Mindful'}
                        gitHubLink={'https://github.com/emibtsu/Mindful'}
                        subtitle={'- React Native - Expo - SQL -'}
                        text={
                            `A social journaling platform intended to revolutionize the way we interact with social media.`
                        }
                    />
                    <ListLine />

                    <ListItem
                        title={`Hospital Login Portal Mock Up`}
                        gitHubLink={'https://github.com/JustinTaebel/CSE360-Group-49'}
                        subtitle={'- Java - JavaFX - Text File DB -'}
                        text={
                            `A hospital portal system for in which doctors, nurses, and patients can log in, view their authorized
                            information, and perform their authorized tasks.`
                        }
                    />
                    <ListLine />

                    <ListItem
                        title={'Spacetime Scavenger'}
                        gitHubLink={'https://github.com/ethanvanderveur/211Final'}
                        subtitle={'- Unity -'}
                        text={
                            `A 3D puzzle-platformer with a focus on object and gravity manipulation.`
                        }
                    />
                    <ListLine />

                    <ListItem
                        title={`A Goo-d Adventure`}
                        gitHubLink={'https://github.com/Brent152/AGoo-dAdventure'}
                        subtitle={'- GameMaker 2 -'}
                        text={
                            `A top-down rogue-like game in which the player traverses floors of rooms defeating enemies and finding items.`
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