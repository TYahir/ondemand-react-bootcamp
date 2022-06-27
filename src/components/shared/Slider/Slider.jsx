import { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import { sliderActions, sliderReducer } from '../../../utils/reducers/sliderReducer';
import Slide from './Slide/Slide';

const SliderContainer = styled.div`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    overflow-x: hidden;
`;

const InnerSlider = styled.div`
    transition: transform 500ms ease-in-out;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    transform: ${props => `translateX(${props.translateX}%)`};
`;

function Slider({ items = [], auto = true, speed = 2000, infinite = true, width, height, ...props }) {

    const [state, dispatch] = useReducer(sliderReducer, {
        currentIndex: 0,
        isPlaying: auto,
        slides: items.length
    });

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            dispatch({ type: sliderActions.PROGRESS });
        }, speed);

        return () => clearInterval(sliderInterval);
    }, [state.currentIndex, state.isPlaying, speed]);

    return ( 
        <SliderContainer width={width} height={height}>
            <InnerSlider translateX={state.currentIndex * -100}>
                {items.map((item, index) => (
                    <Slide
                        key={item.id}
                        image={item.data?.main_image?.url}
                        title={item.data?.title}
                        text={item.data?.description[0]?.text}
                        active={index === state.currentIndex}
                    />
                ))}
            </InnerSlider>
        </SliderContainer>
     );
}

export default Slider;