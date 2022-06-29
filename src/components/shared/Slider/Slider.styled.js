import styled from "styled-components";

export const SliderContainer = styled.div`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    overflow-x: hidden;
`;

export const InnerSlider = styled.div`
    transition: transform 500ms ease-in-out;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    transform: ${props => `translateX(${props.translateX}%)`};
`;
