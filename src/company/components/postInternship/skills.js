import React from 'react';

import Select from 'react-select';

const colourOptions = [
    { value: 'skills', label: 'SKill', color: '#00B8D9', isFixed: true },
    { value: 'css', label: 'CSS', color: '#00B8D9' },
    { value: 'html', label: 'HTML', color: '#0052CC' },
    { value: 'python', label: 'Python', color: '#5243AA' },
    { value: 'django', label: 'Django', color: '#FF5630 ' },
    { value: 'gcp', label: 'GCP', color: '#FF8B00' },
    { value: 'js', label: 'JS', color: '#FFC400' },
    { value: 'nodejs', label: 'NodeJS', color: '#00B8D9' },
    { value: 'php', label: 'PHP', color: '#0052CC' },
    { value: 'mysql', label: 'MySQL', color: '#5243AA' },
    { value: 'mongodb', label: 'MongoDB', color: '#FF5630 ' },
    { value: 'firestore', label: 'FireStore', color: '#FF8B00' },
    { value: 'aws', label: 'AWS', color: '#FFC400' },
    { value: 'azure', label: 'Azure', color: '#FFC400' },

];

const styles = {
    multiValue: (base, state) => {
        return state.data.isFixed ? { ...base, backgroundColor: 'gray' } : base;
    },
    multiValueLabel: (base, state) => {
        return state.data.isFixed
            ? { ...base, fontWeight: 'bold', color: 'white', paddingRight: 6 }
            : base;
    },
    multiValueRemove: (base, state) => {
        return state.data.isFixed ? { ...base, display: 'none' } : base;
    },
};

const orderOptions = values => {

    return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed));
};

export default class FixedOptions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: [colourOptions[0]]
        }


        this.onChange = this.onChange.bind(this);
    }

    onChange(value, { action, removedValue }) {
        switch (action) {
            case 'remove-value':
            case 'pop-value':
                if (removedValue.isFixed) {
                    return;
                }
                break;
            case 'clear':
                value = colourOptions.filter(v => v.isFixed);
                break;
        }
        value = orderOptions(value);

        this.setState({
            value: value,
        },
            () => {

                this.props.methodFromParent("otherSkills", this.state.value)
            });
    }

    render() {
        return (
            <Select
                value={this.state.value}
                isMulti
                styles={styles}
                isClearable={this.state.value.some(v => !v.isFixed)}
                name="colors"
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.onChange}
                options={colourOptions}
            />
        );
    }
}
