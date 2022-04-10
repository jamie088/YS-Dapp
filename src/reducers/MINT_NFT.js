import {
    MINT_NFT,
    MINT_COST,
    PAUSED,
    LIMIT_STATUS,
    WALLET
} from '../actions/types';

const initialState = {
    mintNFT: {
        result: null,
        error: null,
    },
    mintCost: null,
    paused: null,
    limitStatus: null,
    wallet: null
};

export default function (state = initialState, action) {
    switch (action.type) {
    case MINT_NFT:
        return {
            ...state,
            mintNFT: {result: action.payload.result, error: action.payload.error},
        };
    case MINT_COST:
        return {
            ...state,
            mintCost: action.payload,
        };
    case PAUSED:
        return {
            ...state,
            paused: action.payload,
        };
    case LIMIT_STATUS:
        return {
            ...state,
            limitStatus: action.payload
        };
    case WALLET:
        return {
            ...state,
            wallet: action.payload
        };
    default:
        return state;
    }
}
