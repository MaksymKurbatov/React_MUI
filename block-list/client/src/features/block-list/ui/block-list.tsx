import React from 'react';
import {UiTextField} from "@/shared/ui/ui-text-field";
import {useBlockItems} from "@/features/block-list/model/use-block-items";
import {UiSpinner} from "@/shared/ui/ui-spinner";
import {BlockItem} from "@/features/block-list/ui/block-item";

export function BlockList({className}: {className?: string }) {
    const {isLoading,items,q,setQ} = useBlockItems();

    const isLoader = isLoading;
    const isEmptyText = !isLoading && items.length === 0;
    const isItems = items.length > 0;
    return (
        <div className={className}>
            <UiTextField
                className="mb-2"
                label="Searc...."
                inputProps={{value: q, onChange: (e) => setQ(e.target.value) }}>
            </UiTextField>
            <div className="rounded-xl bg-slate-100/50 px-10 py-6 flex flex-col gap-4">
                {isLoading&& <UiSpinner className="text-teal-900 w-10 mx-auto"/>}
                {isEmptyText &&
                    <div className='text-xl py-1 text-center text-amber-500'>List is empty</div>}
                {isItems && items.map((item) => (
                    <BlockItem key={item.id} {...item}/>
                ))}
            </div>
        </div>
    );
}
