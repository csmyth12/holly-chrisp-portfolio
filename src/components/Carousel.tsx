import React, { ReactNode, useState } from "react";

interface CarouselProps {
    children: ReactNode[]
}

export const Carousel: React.FunctionComponent<CarouselProps> = ({ children }) => {
    const [visibleIndex, setVisibleIndex] = useState(0)
    const [visible, setVisible] = useState(children[visibleIndex])

    const goBack = () => {
        console.log('backward index before: ', visibleIndex)

        if (visibleIndex === 0) {
            setVisibleIndex(children.length - 1)
        } else {
            setVisibleIndex(visibleIndex - 1)
        }
        console.log('backward index after: ', visibleIndex)

        setVisible(children[visibleIndex])
    }

    const goForward = () => {
        console.log('forward index before: ', visibleIndex)
        if (visibleIndex === (children.length - 1)) {
            console.log('if')
            setVisibleIndex(0)
        } else {
            console.log('else')
            setVisibleIndex(1 + visibleIndex)
        }
        console.log('forward index after: ', visibleIndex)
        setVisible(children[visibleIndex])
    }
    return (<div className='flex felx-row space-between'>
        <button onClick={() => goBack()}>Back</button>
        <div className='mx-4'>
            {visible}
        </div>
        <button onClick={() => goForward()}>Forward</button>
        </div>)
}
