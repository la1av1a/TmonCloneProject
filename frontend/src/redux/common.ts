export interface AsyncInfo {
    loading: boolean;
    loaded: boolean;
    error: Error | null;
}

export const getInitialAsyncState = (): AsyncInfo => ({
    loading: false,
    loaded: false,
    error: null
})
/**
export const getFetchStartAsyncState = (origin: AsyncInfo): AsyncInfo => ({
    loading: true,
    loaded: origin.loaded,
    error: null
})

export const getFetchErrorAsyncState = (origin: AsyncInfo, error: Error): AsyncInfo => ({
    loading: false,
    loaded: origin.loaded,
    error
})

export const getFetchCompletedAsyncState = (): AsyncInfo => ({
    loading: false,
    loaded: true,
    error: null
})
 */
export interface AsyncState<T> {
    asyncInfo: AsyncInfo,
    data: T
}