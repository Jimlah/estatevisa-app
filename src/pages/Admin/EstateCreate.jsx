import Panel from './../../components/ungrouped/Panel';
import InputField from './../../components/Form/InputField';
import InputPasswordField from './../../components/Form/InputPasswordField';
import SelectOption from '../../components/Form/SelectOption';

const EstateCreate = () => {
    return (
        <Panel title="Estates Creation">
            <form action="#" className="px-2 py-5">
                <InputField label="First Name" name="first_name" autoFocus />
                <InputPasswordField label="Password" name="password" type="password" />
                <SelectOption label="Select" name="select" options={['Male', "Female"]} />
            </form>
        </Panel>
    )
}

export default EstateCreate