import { forwardRef } from "react";
import BlinkInElement from "../BlinkInElement";
import ListItem from "../ListItem";
import ListLine from "../ListLine";
import SegmentBreak from "../SegmentBreak";


const BlogSection = forwardRef((props, ref: any) => {

    return (
        <>
            <div className='section'>
                <div
                    className={'listSection'}
                >

                    <BlinkInElement className='headerText'>Blog</BlinkInElement>
                    <ListLine />
                    <ListItem
                        title={'Nothing to see here yet'}
                        subtitle={':('}
                        text={
                            `But there will be posts in the future!`
                        }
                    />
                    <ListLine />
                    {/* Anchor for scroll jump */}
                    <div ref={ref} />
                </div >
            </div >
            <SegmentBreak />
        </>
    )

})

BlogSection.displayName = 'BlogSection'

export default BlogSection