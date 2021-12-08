import {
    MINT_NFT,
    BURN,
    START,
    PAUSE
} from '../actions/types';

const initialState = {
    mintNFT: null,
    burn: null,
    start: false,
    pause: false
};

export default function (state = initialState, action) {
    switch (action.type) {
    case MINT_NFT:
        return {
            ...state,
            mintNFT: action.payload,
        };
    case BURN:
        return {
            ...state,
            burn: action.payload,
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
