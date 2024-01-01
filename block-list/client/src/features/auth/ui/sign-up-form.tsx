import {UiTextField} from "@/shared/ui/ui-text-field";
import {UiButton} from "@/shared/ui/ui-button";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {authControllerSignUp} from "@/shared/api/generated";
import {useRouter} from "next/router";
import {ROUTES} from "@/shared/constans/routes";
import {UiLink} from "@/shared/ui/ui-link";
import {useSignUpForm} from "@/features/auth/model/use-sign-up-form";
import {errorMessage} from "@orval/core";

export function SignUpForm() {

    /*
   реакт квери мутация
    const router = useRouter();
    const {register, handleSubmit} = useForm<{
        email: string;
        password: string;
    }>();

    const signUpMutation = useMutation({
        mutationFn: authControllerSignUp,
        onSuccess() {
            router.push(ROUTES.HOME);
        }
    })*/
    const {handleSubmit, register, isLoading, errorMessage} = useSignUpForm()
    return (
        <form
            className='flex flex-col gap-2'
            onSubmit={handleSubmit}
        >
            <UiTextField
                label='Email'
                inputProps={{
                    type: 'email',
                    ...register("email", {required: true})
                }}
            />
            <UiTextField
                label='Passowrd'
                inputProps={{
                    type: 'password',
                    ...register("password", {required: true})
                }}
            />
            <UiButton
                disabled={isLoading}
                variant='primary'
                label='Sign Up'
                className='mt-3'
            />
            <UiLink href={ROUTES.SIGN_IN}>Sign In</UiLink>
            {errorMessage &&
                <div className="text-rose-600 ">{errorMessage}</div>
            }
        </form>
    );
}