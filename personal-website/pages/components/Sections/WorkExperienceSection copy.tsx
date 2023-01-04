import { forwardRef } from "react";
import BlinkInElement from "../BlinkInElement";
import ListItem from "../ListItem";
import ListLine from "../ListLine";
import SegmentBreak from "../SegmentBreak";



const WorkExperienceSection = forwardRef((props, ref: any) => {

    return (
        <>
            <div className='section'>
                <div
                    className={'listSection'}

                >

                    <BlinkInElement className='headerText'>Work Experience</BlinkInElement>
                    <ListLine />
                    <ListItem
                        title={'Technical Product Intern'}
                        subtitle={'Paradox : Aug 2022 - Present'}
                        text={
                            `Prototyped new tools and potential products, leading a few to completion. These 
                            prototypes mostly involved in Full Stack Development and Machine Learning; utilizing 
                            React, Javascript, Python, Haystack by Deepset, Wit.ai, and OpenAI. `
                        }
                    />
                    <ListLine />
                    {/* Anchor for scroll jump */}
                    <div ref={ref} />
                    <ListItem
                        title={'Integrations Intern'}
                        subtitle={'Paradox : May 2022 - Aug 2022'}
                        text={
                            `Built and debugged integrations between Paradox and outside providers' systems.`
                        }
                    />
                    <ListLine />
                </div >
            </div >
            <SegmentBreak />
        </>
    )

})

WorkExperienceSection.displayName = 'WorkExperienceSection'
export default WorkExperienceSection