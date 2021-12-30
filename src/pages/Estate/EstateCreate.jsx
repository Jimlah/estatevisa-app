import Panel from './../../components/ungrouped/Panel';
import InputField from './../../components/Form/InputField';
import SubmitButton from '../../components/Form/SubmitButton';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createEstate, getEstateById, updateEstate } from '../../services/EstateSLice';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { addBearerToken } from './../../store/baseHttp';

const EstateCreate = () => {

    const { loading, error, item } = useSelector(state => state.estate);
    const { token } = useSelector(state => state.auth);
    const { register, handleSubmit, setValue } = useForm();
    const dispatch = useDispatch();

    const { id } = useParams();

    const onSubmit = (formData) => {
        if (!id) {
            dispatch(createEstate({
                path: 'admin/estates',
                payload: formData
            }))
        }

        if (id) {
            dispatch(updateEstate({
                path: `admin/estates/${id}`,
                payload: formData
            }))
        }
    }

    useEffect(() => {
        if (id) {
            addBearerToken(token);
            dispatch(getEstateById({
                path: `admin/estates/${id}`
            }))
        }
    }, [id, dispatch, token])


    useEffect(() => {
        if (item) {
            setValue('first_name', item.manager.first_name);
            setValue('last_name', item.manager.last_name);
            setValue('email', item.manager.email);
            setValue('logo', item.logo);
            setValue('name', item.name);
            setValue('code', item.code);
            setValue('address', item.address);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item]);


    return (
        <Panel title="Estates Creation">
            <form onSubmit={handleSubmit(onSubmit)} className="px-2 py-5">
                <InputField label="First Name" name="first_name" type="text" autoFocus register={register('first_name')} error={error?.first_name} />
                <InputField label="Last Name" name="last_name" type="text" register={register('last_name')} error={error?.last_name} />
                <InputField label="code" name="code" type="text" register={register('code')} error={error?.code} />
                <InputField label="logo" name="logo" type="text" register={register('logo')} error={error?.logo} />
                <InputField label="email" name="email" type="email" register={register('email')} error={error?.email} />
                <InputField label="Estate Name" name="name" type="text" register={register('name')} error={error?.name} />
                <InputField label="Address" name="address" type="text" register={register('address')} error={error?.address} />
                <SubmitButton loading={loading}>{!id ? "Create" : "Update"}</SubmitButton>
            </form>
        </Panel>
    )
}

export default EstateCreate