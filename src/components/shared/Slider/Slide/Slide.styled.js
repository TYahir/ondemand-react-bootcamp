import styled from 'styled-components';

export const StyledSlide = styled.div`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    overflow-y: hidden;
    position: relative;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h1, p {
        z-index: 1;
        background-color: white;
        display: inline-flex;
        padding: .5em;
        transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
        opacity: ${props => props.active ? 1 : 0};
        word-break: break-word;
    }

    h1 {
        margin-bottom: 10px;
        transform: ${props => props.active ? 'translateY(20px)' : 'translateY(100px)'};
        transition-delay: ${props => props.active ? '300ms' : '-100ms'};
    }

    p {
        margin-top: 0;
        transform: ${props => props.active ? 'translateY(30px)' : 'translateY(100px)'};
        transition-delay: ${props => props.active ? '500ms' : '-300ms'};
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        left: 0;
        top: 0;
    }
`;
