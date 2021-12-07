export const NETWORK = {
    MAIN: 1,
    ROPSTEIN: 3,
    RINKEBY: 4,
    GOERLI: 5,
    KOVAN: 42,
};

export const getNetworkChainId = () => {
    const { REACT_APP_BUILD_MODE } = process.env;

    if (REACT_APP_BUILD_MODE === "production") {
        // return NETWORK.MAIN;
        return NETWORK.RINKEBY; // we are checking in rinkeby network now: temp
    }
    return NETWORK.RINKEBY;
};

export const RESPONSE = {
    SUCCESS: 100,
    INSUFFICIENT: 200,
    ERROR: 300,
    SHOULD_APPROVE: 400,
    SHOULD_STAKE: 500,
};

export const getWalletAddressEllipsis = (address, head = 6, tail = 4) => {
    return `${address.substring(0, head)}...${address.substring(address.length - tail)}`;
};
