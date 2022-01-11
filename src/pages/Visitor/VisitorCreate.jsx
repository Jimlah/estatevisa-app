import Panel from '../../components/ungrouped/Panel';
import InputField from '../../components/Form/InputField';
import InputPasswordField from '../../components/Form/InputPasswordField';
import SelectOption from '../../components/Form/SelectOption';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBearerToken } from '../../store/baseHttp';
import Select from '../../components/Form/Select';
import Option from '../../components/Form/Option';
import SubmitButton from '../../components/Form/SubmitButton';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { clearVisitorState, createVisitor, getVisitorById, updateVisitor } from '../../services/VisitorSlice';
import { getAllEstates } from '../../services/EstateSLice';

const EstateCreate = () => {

    const { error, loading, item } = useSelector(state => state.visitor);
    const { data } = useSelector(state => state.estate);
    const { token } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { register, handleSubmit, setValue } = useForm();

    const { id } = useParams();

    const onSubmit = (formData) => {
        if (!id) {
            dispatch(createVisitor({
                path: 'manager/visitors',
                payload: formData
            }))
        }

        if (id) {
            dispatch(updateVisitor({
                path: `manager/visitors/${id}`,
                payload: formData
            }))
        }
    }

    useEffect(() => {
        addBearerToken(token);
        dispatch(getAllEstates({ path: 'manager/estates' }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        if (id) {
            addBearerToken(token);
            dispatch(getVisitorById({
                path: `manager/visitors/${id}`
            }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, dispatch, token])


    useEffect(() => {
        if (!id) {
            dispatch(clearVisitorState('item'));
            setValue('estate_id', "select")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    useEffect(() => {
        if (item) {
            setValue('first_name', item.first_name);
            setValue('last_name', item.last_name);
            setValue('email', item.email);
            setValue('phone', item.phone);
            setValue('address', item.address);
            // setValue('estate_id', item.estate?.id);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item]);

    return (
        <Panel title="Visitors Creation">
            <form onSubmit={handleSubmit(onSubmit)} className="px-2 py-5">
                <InputField label="First Name" name="first_name" register={register('first_name')} error={error?.first_name} />
                <InputField label="Last Name" name="last_name" register={register('last_name')} error={error?.last_name} />
                <InputField label="Email" name="email" register={register('email')} error={error?.email} />
                <InputField label="Phone Number" name="phone" register={register('phone')} error={error?.phone} />
                <InputField label="Address" name="address" register={register('address')} error={error?.address} />
                <SubmitButton loading={loading} > Create </SubmitButton>
            </form>
        </Panel>
    )
}

export default EstateCreate