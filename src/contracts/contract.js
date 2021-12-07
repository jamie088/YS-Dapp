import NFT_CONTRACT_ABI from './NFT_abi.json';
import TOKEN_CONTRACT_ABI from './Token_abi.json';

export const NFT_CONTRACT_ADDRESS = '0xE4873c018412491dF100b2E3A2F8d919e3d8a701';
export const TOKEN_CONTRACT_ADDRESS = '0x864989753bd8F1BA11e258679C82384fa2300bEF';

export const nftContract = {
    abi: NFT_CONTRACT_ABI,
    address: NFT_CONTRACT_ADDRESS
};

export const tokenContract = {
    abi: TOKEN_CONTRACT_ABI,
    address: TOKEN_CONTRACT_ADDRESS
};