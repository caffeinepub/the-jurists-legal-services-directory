import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useInternetIdentity } from './useInternetIdentity';
import type { 
  ContactFormSubmission, 
  CreateContactFormSubmissionInput, 
  UserProfile,
  Variant,
  Variant__3
} from '../backend';

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

export function useCreateContactFormSubmission() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (input: CreateContactFormSubmissionInput) => {
      if (!actor) throw new Error('Actor not available');
      return actor.createContactFormSubmission(input);
    },
  });
}

export function useGetAllContactFormSubmissions() {
  const { actor, isFetching } = useActor();
  const { identity } = useInternetIdentity();

  return useQuery<ContactFormSubmission[]>({
    queryKey: ['contactFormSubmissions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContactFormSubmissions();
    },
    enabled: !!actor && !isFetching && !!identity,
    staleTime: 30000,
    retry: 2,
  });
}

export function useGetContactFormSubmissionsByJurisdiction(jurisdiction: Variant__3) {
  const { actor, isFetching } = useActor();

  return useQuery<ContactFormSubmission[]>({
    queryKey: ['contactFormSubmissions', 'jurisdiction', jurisdiction],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getContactFormSubmissionsByJurisdiction(jurisdiction);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetContactFormSubmissionsByStatus(status: Variant) {
  const { actor, isFetching } = useActor();

  return useQuery<ContactFormSubmission[]>({
    queryKey: ['contactFormSubmissions', 'status', status],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getContactFormSubmissionsByStatus(status);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateContactFormSubmissionStatus() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, status }: { id: bigint; status: Variant }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.updateContactFormSubmissionStatus(id, status);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactFormSubmissions'] });
    },
  });
}

export function useIsCallerAdmin() {
  const { actor, isFetching } = useActor();
  const { identity } = useInternetIdentity();

  return useQuery<boolean>({
    queryKey: ['isCallerAdmin', identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor || !identity) return false;
      try {
        const result = await actor.isCallerAdmin();
        return result;
      } catch (error) {
        console.error('Error checking admin status:', error);
        return false;
      }
    },
    enabled: !!actor && !isFetching && !!identity,
    staleTime: 60000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}

export function useIsAdminActorFieldInitialized() {
  const { actor, isFetching } = useActor();

  return useQuery<boolean>({
    queryKey: ['isAdminActorFieldInitialized'],
    queryFn: async () => {
      if (!actor) return false;
      try {
        return await actor.isAdminActorFieldInitialized();
      } catch (error) {
        console.error('Error checking admin initialization:', error);
        return false;
      }
    },
    enabled: !!actor && !isFetching,
    staleTime: 10000,
    retry: 1,
  });
}

export function useInitializeAccessControl() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error('Actor not available');
      try {
        await actor.initializeAccessControl();
      } catch (error: any) {
        if (error.message?.includes('already initialized')) {
          return;
        }
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['isAdminActorFieldInitialized'] });
      queryClient.invalidateQueries({ queryKey: ['isCallerAdmin'] });
    },
  });
}
