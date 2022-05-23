import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../helpers/TextError'

function Select (props) {
  const { label, name, options, ...rest } = props
  return (
    <div className='form-control mb-3'>
      <label htmlFor={name}>{label}</label>
      <Field as='select' id={name} name={name} {...rest} className='form-select mr-3 shadow-sm appearance-none border border-gray-400/75 rounded w-full text-gray-700 focus:border-emerald-500 focus:outline-none focus:shadow-outline'>
        <option value="" disabled defaultValue="Selecionar">Selecionar</option>
        {options.map(option => {
          return (
            <option key={option.key} value={option.key}>
              {option.value}
            </option>
          )
        })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Select
