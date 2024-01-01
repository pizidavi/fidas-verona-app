// Redux
import type { RootStore } from '../store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;

export default useAppSelector;
