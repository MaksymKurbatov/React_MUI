import Image from 'next/image'
import {Inter} from 'next/font/google'
import {useEffect} from "react";
import {authControllerGetSessionInfo, authControllerSignIn} from "@/shared/api/generated";
import {useQuery} from "@tanstack/react-query";
import {UiButton} from "@/shared/ui/ui-button";
import {UiTextField} from "@/shared/ui/ui-text-field";
import {UiSelectField} from "@/shared/ui/ui-select-field";
import {UiLink} from "@/shared/ui/ui-link";
import {UiSpinner} from "@/shared/ui/ui-spinner";
import {UiPageSpinner} from "@/shared/ui/ui-page-spiner";
import {UiLogo} from "@/shared/ui/ui-logo";
import {UiHeader} from "@/shared/ui/ui-header";
import {SignOutButton} from "@/features";
import {useSessionQuery} from "@/entities/session/index,";

const inter = Inter({subsets: ['latin']})

export default function HomePage() {

    /* api example
     useEffect(() => {
         authControllerSignIn({email: "test@gmail.com", password: "1234"}).then(console.log);
     }, [])*/

    /* react-query useQuery call example
    const {data} = useQuery({
         queryKey: ['session'],
         queryFn: () => authControllerGetSessionInfo()
     })*/

    const {data} = useSessionQuery()

    return (
        <main
            className={`min-h-screen flex-col `}
        >
            <UiHeader right={<div className={"m-2"}>
                {data?.email}
                <SignOutButton/>
            </div>}/>
            <div className="flex flex-col items-center justify-center space-y-4 w-full">
                {data?.email && (
                    <div className="border border-green-700 p-2">
                        {data.email}
                    </div>
                )}
                {/* UiButton centered both horizontally and vertically */}
                <UiButton variant="primary">PRIMARY</UiButton>
                <UiButton variant="secondary">SECONDARY</UiButton>
                <UiButton variant="outlined">OUTLINED</UiButton>
                <UiButton disabled variant="primary">OUTLINED</UiButton>
                <UiTextField label="Text fuield" inputProps={{placeholder: 'enter text..'}}></UiTextField>
                <UiSelectField
                    selectProps={{}}
                    options={[
                        {value: "1", label: "Option 1"},
                        {value: "2", label: "Option 2"}
                    ]}
                />
                <UiLink href={'/'}> SOME LINK </UiLink>
                <UiSpinner className={"text-teal-900 w-10 h-10"}/>
                <UiLogo/>
            </div>
        </main>
    )
}
