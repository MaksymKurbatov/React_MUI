import {SignUpForm} from "@/features";
import {UiHeader} from "@/shared/ui/ui-header";
import {UiFormPageLayout} from "@/shared/ui/layouts/ui-form-page-layout";

export function SignUpPage() {
    return (
        <UiFormPageLayout
            title="Sign UP"
            header={<UiHeader/>}
            form={<SignUpForm/>}
        />
    );
}