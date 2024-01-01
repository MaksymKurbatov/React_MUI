
import { authControllerSignOut } from "@/shared/api/generated";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import {ROUTES} from "@/shared/constans/routes";
import {useResetSession} from "@/entities/session";

export function useSignOut() {
    const router = useRouter();
    const queryClient = useQueryClient()
    const resetSession = useResetSession();

    const singOutMutation = useMutation({
        mutationFn: authControllerSignOut,
        async onSuccess() {
            router.push(ROUTES.SIGN_IN);
            resetSession()
        },
    });

    return {
        isLoading: singOutMutation.isPending,
        singOut: singOutMutation.mutate,
    };
}