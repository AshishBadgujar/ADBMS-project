import useSWR from 'swr';
import { fetcher } from './fetcher';
import { User } from '@prisma/client';

export function useFeed() {
    const { data, error } = useSWR('/api/feed', fetcher);
    return { feed: data };
}
export function useMe() {
    const { data } = useSWR('/api/me', fetcher);
    return { me: data };
}