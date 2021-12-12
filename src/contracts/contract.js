import NFT_CONTRACT_ABI from './NFT_abi.json';
import TOKEN_CONTRACT_ABI from './Token_abi.json';

export const NFT_CONTRACT_ADDRESS = '0x7214AB3AC5dE6CDB7aeD213c3Ba0C2591097A34B';
export const TOKEN_CONTRACT_ADDRESS = '0x864989753bd8F1BA11e258679C82384fa2300bEF';

export const nftContract = {
    abi: NFT_CONTRACT_ABI,
    address: NFT_CONTRACT_ADDRESS
};

export const tokenContract = {
    abi: TOKEN_CONTRACT_ABI,
    address: TOKEN_CONTRACT_ADDRESS
};