import { StyledSlide } from "./Slide.styled";

function Slide({ image, title, text, active }) {
    return (
        <StyledSlide active={active}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{text}</p>
        </StyledSlide>
    );
}

export default Slide;