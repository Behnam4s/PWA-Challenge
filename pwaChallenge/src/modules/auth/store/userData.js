import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';


const { persistAtom } = recoilPersist({
    key: 'UserInfo',
});
const userDataState = atom({
    key: 'UserInfo',
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export default userDataState;
