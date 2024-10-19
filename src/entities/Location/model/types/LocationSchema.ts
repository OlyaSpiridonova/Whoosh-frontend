import { Location } from './location';

export interface LocationSchema {
    isLoading: boolean;
    error?: string;
    data: Location[];
}
