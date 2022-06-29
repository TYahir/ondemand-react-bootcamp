import { StyledSlide } from "./Slide.styled";
import PropTypes from 'prop-types';

function Slide({ image, title, text, active }) {
    return (
        <StyledSlide active={active}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{text}</p>
        </StyledSlide>
    );
}

Slide.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    active: PropTypes.bool,
}

export default Slide;