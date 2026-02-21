import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useInternetIdentity } from './useInternetIdentity';
import type {
  ContactFormSubmission,
  CreateContactFormSubmissionInput,
  UserProfile,
  Variant,
  Variant__3,
  BlogArticle,
  Variant__1,
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
    queryKey: ['contactFormSubmissions', jurisdiction],
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
    queryKey: ['contactFormSubmissions', status],
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

  return useQuery<boolean>({
    queryKey: ['isAdmin'],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching,
    staleTime: 60000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}

export function useIsAdminActorFieldInitialized() {
  const { actor, isFetching } = useActor();

  return useQuery<boolean>({
    queryKey: ['isAdminInitialized'],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isAdminActorFieldInitialized();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useInitializeAccessControl() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.initializeAccessControl();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['isAdminInitialized'] });
      queryClient.invalidateQueries({ queryKey: ['isAdmin'] });
    },
  });
}

// Blog article queries
export function useGetAllBlogArticles() {
  const { actor, isFetching } = useActor();

  return useQuery<BlogArticle[]>({
    queryKey: ['blogArticles'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBlogArticles();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetBlogArticleById(id: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<BlogArticle | null>({
    queryKey: ['blogArticle', id.toString()],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getBlogArticleById(id);
    },
    enabled: !!actor && !isFetching && id > 0n,
  });
}

export function useGetBlogArticlesByCategory(category: Variant__1) {
  const { actor, isFetching } = useActor();

  return useQuery<BlogArticle[]>({
    queryKey: ['blogArticles', category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBlogArticlesByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}
