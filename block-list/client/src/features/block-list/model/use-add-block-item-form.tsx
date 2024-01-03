import {useForm} from "react-hook-form";
import {useAddBlockItemMutation} from "@/entities/block-lisst/queries";
import {AddBlockItemDtoType} from "@/shared/api/generated";

export function useAddBlockItemForm() {

    const {handleSubmit, register, watch, reset} = useForm<{
        type: AddBlockItemDtoType;
        data: string;
    }>({
        defaultValues: {
            type: AddBlockItemDtoType.Website,
        },
    });

    const addBlockItemMutation = useAddBlockItemMutation();
    const type = watch("type");
    return {
        handleSubmit: handleSubmit((data) =>
            addBlockItemMutation.mutate(data, {
                    onSuccess() {
                        reset();
                    }
                }
            )),
        isLoading: addBlockItemMutation.isPending,
        register,
        type,
    }
}