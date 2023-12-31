import Image from 'next/image'
import {Inter} from 'next/font/google'
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
import {useSessionQuery} from "@/entities/session";
import {ToggleBlockingButton} from "@/features/toggle-blocking/ui/toggle-blocking-button";
import {Profile} from "@/widgets/profile";
import {useBlockListQuery} from "@/entities/block-lisst/queries";
import {AddBlockItemForm, BlockList} from "@/features/block-list/insex";

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

    //const {data} = useSessionQuery()
    const {data} = useBlockListQuery({});
    return (
        <main
            className={`min-h-screen flex flex-col `}
        >
            <UiHeader right={<div className={"m-2"}>
                <Profile/>
            </div>}/>
            <div className='pt-10 px-5'>
                <h1 className='text-2xl mb-8'>Block List</h1>
                <AddBlockItemForm/>
               <BlockList className="mt-7"/>
            </div>
            <div className="grid grid-cols-[200px_1fr] py-3 items-center">
                <aside className="px-5">
                    <ToggleBlockingButton/>
                </aside>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 w-full">
                {/*
             {data?.email && (
                    <div className="border border-green-700 p-2">
                        {data.email}
                    </div>
                )}
            */}
                <UiButton variant="primary" label="PRIMARY"></UiButton>
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
