import React from 'react';
import {useAddBlockItemForm} from "@/features/block-list/model/use-add-block-item-form";
import {UiSelectField} from "@/shared/ui/ui-select-field";
import {UiTextField} from "@/shared/ui/ui-text-field";
import {UiButton} from "@/shared/ui/ui-button";
import {AddBlockItemDtoType} from "@/shared/api/generated";

export function AddBlockItemForm() {
    const {handleSubmit, isLoading, register, type} = useAddBlockItemForm();
    const options = [
        {label: "WebSite" , value: AddBlockItemDtoType.Website},
        {label: "KeyWord" , value: AddBlockItemDtoType.KeyWord},
    ]
    return (
        <form className='flex gap-2' onSubmit={handleSubmit}>
            <UiSelectField
                className='grow min-w-[200px]'
                options={options}
                selectProps={{
                    ...register('type'),
            }}

            />
            <UiTextField
                className="grow"
                inputProps={{
                    placeholder: type === 'KeyWord' ? 'Enter Key Word...' : 'Enter website',
                    ...register('data')
                }}
            />
            <UiButton
                variant='primary'
                label='Add Block Item'>
            </UiButton>
        </form>
    );
}
