import Panel from '../../components/ungrouped/Panel';
import InputField from '../../components/Form/InputField';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBearerToken } from '../../store/baseHttp';
import Select from '../../components/Form/Select';
import Option from '../../components/Form/Option';
import SubmitButton from '../../components/Form/SubmitButton';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { clearHouseState, createHouse, getHouseById, updateHouse } from '../../services/HouseSlice';
import { getAllEstates } from '../../services/EstateSLice';

const EstateCreate = () => {

    const { error, loading, item } = useSelector(state => state.house);
    const { data } = useSelector(state => state.estate);
    const { token } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { register, handleSubmit, setValue } = useForm();

    const { id } = useParams();

    const onSubmit = (formData) => {
        addBearerToken(token)
        if (!id) {
            dispatch(createHouse({
                path: 'manager/houses',
                payload: formData
            }))
        }

        if (id) {
            dispatch(updateHouse({
                path: `manager/houses/${id}`,
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
            dispatch(getHouseById({
                path: `manager/houses/${id}`
            }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, dispatch, token])


    useEffect(() => {
        if (!id) {
            dispatch(clearHouseState('item'));
            setValue('estate_id', "select")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    useEffect(() => {
        if (item) {
            setValue('address', item.address);
            setValue('category', item.category);
            setValue('description', item.description);
            setValue('estate_id', item.estate?.id);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item]);

    return (
        <Panel title="Houses Creation">
            <form onSubmit={handleSubmit(onSubmit)} className="px-2 py-5">
                <InputField label="Address" name="address" register={register('address')} error={error?.address} />
                <InputField label="Category" name="category" register={register('category')} error={error?.category} />
                <InputField label="Description" name="description" register={register('description')} error={error?.description} />
                <Select
                    label="Estate"
                    name="estate_id"
                    error={error?.estate_id}
                    register={register('estate_id')}
                >

                    {
                        data?.map((estate, index) => (
                            <Option key={index} value={estate.id} >{estate.name}</Option>
                        ))
                    }
                </Select>
                <SubmitButton loading={loading} > Create </SubmitButton>
            </form>
        </Panel>
    )
}

export default EstateCreate