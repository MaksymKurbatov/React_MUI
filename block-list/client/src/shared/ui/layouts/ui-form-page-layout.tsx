import {UiHeader} from "@/shared/ui/ui-header";
import {SignUpForm} from "@/features";
import {ReactNode} from "react";

export function UiFormPageLayout({title, form, header}:
                                     {
                                         header?: ReactNode;
                                         form?: ReactNode;
                                         title?: ReactNode;
                                     }) {

    return (
        <div className="min-h-screen flex flex-col bg-slate-100">
            {header}
            <main className="grow flex flex-col pt-24">
                <div
                    className="rounded-xl border border-slate-800 px-14 py-8  w-full max-w-[400px] bg-white self-center">
                    <h1 className="text-2xl mb-6 ju text-center">{title}</h1>
                    {form}
                </div>
            </main>
        </div>
    )
}