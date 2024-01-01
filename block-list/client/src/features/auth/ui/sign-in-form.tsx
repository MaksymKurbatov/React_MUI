import {useSignInForm} from "@/features/auth/model/use-sign-in-form";
import {UiTextField} from "@/shared/ui/ui-text-field";
import {UiButton} from "@/shared/ui/ui-button";
import {UiLink} from "@/shared/ui/ui-link";
import {ROUTES} from "@/shared/constans/routes";


export function SignInForm() {
    const { handleSubmit, isLoading, register, errorMessage } = useSignInForm();

    return (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <UiTextField
                label="Email"
                inputProps={{ type: "email", ...register("email", { required: true }) }}
            />
            <UiTextField
                label="Password"
                inputProps={{
                    type: "password",
                    ...register("password", { required: true }),
                }}
            />
            <UiButton
                disabled={isLoading}
                variant='primary'
                label='Sign In'
                className='mt-3'
            />
            <UiLink href={ROUTES.SIGN_UP}>
                Sign Up
            </UiLink>
            {errorMessage && <div className="text-rose-500">{errorMessage}</div>}
        </form>
    );
}