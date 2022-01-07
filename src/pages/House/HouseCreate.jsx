import Panel from '../../components/ungrouped/Panel';
import InputField from '../../components/Form/InputField';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEstate, getAllEstates, updateEstate } from '../../services/EstateSLice';
import { addBearerToken } from '../../store/baseHttp';
import Select from '../../components/Form/Select';
import Option from '../../components/Form/Option';
import SubmitButton from '../../components/Form/SubmitButton';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const EstateCreate = () => {

    const { data, error, loading } = useSelector(state => state.estate);
    const { token } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { register, handleSubmit, setValue } = useForm();

    const { id } = useParams();

    const onSubmit = (formData) => {
        console.log(formData);
        if (!id) {
            dispatch(createEstate({
                path: 'manager/houses',
                payload: formData
            }))
        }

        if (id) {
            dispatch(updateEstate({
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


    return (
        <Panel title="Estates Creation">
            <form onSubmit={handleSubmit(onSubmit)} className="px-2 py-5">
                <InputField label="Address" name="address" register={register('address')} error={error?.address} />
                <InputField label="Category" name="category" register={register('category')} error={error?.category} />
                <InputField label="Description" name="description" register={register('description')} error={error?.description} />
                <Select
                    label="Estate"
                    name="estate_id"
                    error={error?.estate_id}
                    register={register('estate_id')}
                    onChange={(e) => {
                        setValue('estate_id', e.target.value);
                    }}
                >

                    {
                        data?.map((estate, index) => (
                            <Option key={index} value={estate.id}>{estate.name}</Option>
                        ))
                    }
                </Select>
                <SubmitButton loading={loading} > Create </SubmitButton>
            </form>
        </Panel>
    )
}

export default EstateCreate