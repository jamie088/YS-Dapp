import {
    MINT_NFT,
    BURN,
    START,
    PAUSE
} from '../actions/types';

const initialState = {
    mintNFT: false,
    burn: false,
    start: false,
    pause: false
};

export default function (state = initialState, action) {
    switch (action.type) {
    case MINT_NFT:
        return {
            ...state,
            mintNFT: action.payload.success,
        };
    case BURN:
        return {
            ...state,
            burn: action.payload.success,
        };
    case START:
        return {
            ...state,
            start: action.payload,
        };
    case PAUSE:
        return {
            ...state,
            pause: action.payload,
        };
    default:
        return state;
    }
}
