import React from 'react'
import DateView from 'react-datepicker'
import TextError from '../helpers/TextError'
import { Field, ErrorMessage } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'

function DatePicker (props) {
  const { label, name, ...rest } = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView
              dateFormat="dd/mm/yyyy"
              placeholderText="Selecione a data"
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={val => setFieldValue(name, val)}
            />
          )
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default DatePicker
