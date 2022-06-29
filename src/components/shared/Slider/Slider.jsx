import { useReducer, useEffect } from 'react';
import { sliderActions, sliderReducer } from '../../../utils/reducers/sliderReducer';
import Slide from './Slide/Slide';
import { InnerSlider, SliderContainer } from './Slider.styled';

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