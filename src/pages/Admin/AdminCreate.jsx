import Panel from '../../components/ungrouped/Panel';
import InputField from '../../components/Form/InputField';
import SelectOption from '../../components/Form/SelectOption';

const AdminCreate = () => {
    return (
        <Panel title="Create Admin">
            <form action="#" className="px-2 py-5">
                <InputField label="First Name" name="first_name" type="text" autoFocus />
                <InputField label="Last Name" name="last_name" type="text" />
                <InputField label="email" name="email" type="email" />
                <SelectOption label="Select" name="select" options={['Male', "Female"]} />
            </form>
        </Panel>
    )
}

export default AdminCreate