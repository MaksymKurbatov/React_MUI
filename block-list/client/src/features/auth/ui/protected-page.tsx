import {useRouter} from "next/router";
import {PropsWithChildren, ReactElement, useReducer} from "react";
import {useQuery} from "@tanstack/react-query";
import {authControllerGetSessionInfo} from "@/shared/api/generated";
import {UiPageSpinner} from "@/shared/ui/ui-page-spiner";
import {ROUTES} from "@/shared/constans/routes";
import {useSessionQuery} from "@/entities/session";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
    return function ProtectedPage(props: PropsWithChildren<P>) {
        const router = useRouter();
        const {isError, isLoading} = useSessionQuery()

        if (isLoading) {
            return <UiPageSpinner/>;
        }

        if (isError) {
            router.replace(ROUTES.SIGN_IN)
        }

        return <Component {...props} />;
    };
}