import Panel from './../../components/ungrouped/Panel';
import InputField from './../../components/Form/InputField';
import SubmitButton from '../../components/Form/SubmitButton';

const EstateCreate = () => {
    return (
        <Panel title="Estates Creation">
            <form action="#" className="px-2 py-5">
                <InputField label="First Name" name="first_name" type="text" autoFocus />
                <InputField label="Last Name" name="last_name" type="text" />
                <InputField label="code" name="code" type="text" />
                <InputField label="email" name="email" type="email" />
                <InputField label="Estate Name" name="name" type="text" />
                <InputField label="Address" name="address" type="text" />
                <SubmitButton>Create</SubmitButton>
            </form>
        </Panel>
    )
}

export default EstateCreate