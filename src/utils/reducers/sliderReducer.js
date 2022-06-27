export const sliderActions = {
    NEXT: 'NEXT',
    PREV: 'PREV',
    PLAY: 'PLAY',
    PAUSE: 'PAUSE',
    PROGRESS: 'PROGRESS',
    SET_SLIDE: 'SET_SLIDE',
}

export function sliderReducer(state, action) {
  switch (action.type) {
    case sliderActions.PROGRESS:
    case sliderActions.NEXT:
        return {
            ...state,
            isPlaying: action.type === sliderActions.PROGRESS,
            currentIndex: (state.currentIndex + 1) % state.slides,
        };
    case sliderActions.PREV:
        return {
            ...state,
            isPlaying: false,
            currentIndex: (state.currentIndex - 1 + state.slides) % state.slides,
        };
    case sliderActions.PLAY:
        return {
            ...state,
            isPlaying: true,
        };
    case sliderActions.PAUSE:
        return {
            ...state,
            isPlaying: false,
        };
    case sliderActions.SET_SLIDE:
        return {
            ...state,
            isPlaying: false,
            currentIndex: action.payload.index,
        };
    default:
      return state;
  }
}
