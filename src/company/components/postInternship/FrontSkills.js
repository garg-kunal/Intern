import React from 'react'

import Select from 'react-select'

const colourOptions = [
  { value: 'skills', label: 'SKill', color: '#4a00e0', isFixed: true },
  { value: 'css', label: 'CSS', color: '#00B8D9' },
  { value: 'html', label: 'HTML', color: '#0052CC' },
  { value: 'bootstrap', label: 'Bootstrap', color: '#5243AA' },

  { value: 'react.js', label: 'ReactJS', color: '#FF8B00' },
  { value: 'javascript', label: 'JS', color: '#FFC400' },
  { value: 'angularjs', label: 'AngularJS', color: '#5243AA' },

  { value: 'jquery', label: 'JQuery', color: '#FF8B00' }
]

const styles = {
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, backgroundColor: 'gray' } : base
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, fontWeight: 'bold', color: 'white', paddingRight: 6 }
      : base
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: 'none' } : base
  }
}

const orderOptions = values => {
  return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed))
}

export default class FixedOptions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: [colourOptions[0]]
    }
    
    this.onChange = this.onChange.bind(this)
  }

  onChange (value, { action, removedValue }) {
    switch (action) {
      case 'remove-value':
      case 'pop-value':
        if (removedValue.isFixed) {
          return
        }
        break
      case 'clear':
        value = colourOptions.filter(v => v.isFixed)
        break
    }

    value = orderOptions(value)
    // this.props.props.push(value);

    this.setState(
      {
        value: value
      },()=>{
        this.props.onChangeValue(this.state.value);

      }
    )
    
    // return this.props.props
  }

  render () {
    return (
      <Select
        value={this.state.value}
        isMulti
        styles={styles}
        isClearable={this.state.value.some(v => !v.isFixed)}
        name='colors'
        className='basic-multi-select'
        classNamePrefix='select'
        onChange={this.onChange}
        options={colourOptions}
      />
    )
  }
}
