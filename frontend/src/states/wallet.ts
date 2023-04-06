import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { connectMetamask } from "../utils/metamask";

export const accountAtom = atom<string | null>({
    key: 'atom/account',
    default: null,
})

export const chainIdAtom = atom<number | null>({
    key: 'atom/chainId',
    default: null
})

export const isConnectedAtom = atom<boolean | null>({
    key: 'atom/chainId',
    default: null
})

export const useWallet = () => {
    const account = useRecoilValue(accountAtom);
    const chainId = useRecoilValue(chainIdAtom);
    return {
        account, chainId
    }
}

export const useConnectWallet = () => {
    const [account, setAccount] = useRecoilState(accountAtom);
    const [chainId, setChainId] = useRecoilState(chainIdAtom);

    const connect = async () => {
        const res = await connectMetamask();
        if(!res) return alert("!!!!!")

        setAccount(res!.account);
        setChainId(res!.chainId);
    }

    const disconnect = async () => {
        setAccount(null);
        setChainId(null);
    }

    return {
        account, 
        chainId, 
        connect, 
        disconnect
    };
}