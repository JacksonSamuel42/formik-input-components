import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Input, Select, DatePicker, CheckboxGroup, RadioButtons, Textarea, } from './components/Formik'

const dropdownOptions = [
  { key: 'Option 1', value: 'option1' },
  { key: 'Option 2', value: 'option2' },
  { key: 'Option 3', value: 'option3' }
]
const radioOptions = [
  { key: 'Option 1', value: 'rOption1' },
  { key: 'Option 2', value: 'rOption2' },
  { key: 'Option 3', value: 'rOption3' }
]
const checkboxOptions = [
  { key: 'Option 1', value: 'cOption1' },
  { key: 'Option 2', value: 'cOption2' },
  { key: 'Option 3', value: 'cOption3' }
]



const App = () => {
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
    birthDate: null
  }

  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required'),
    birthDate: Yup.date()
      .required('Required')
      .nullable()
  })

  const onSubmit = values => {
    console.log('Form data', values)
    console.log('Saved data', JSON.parse(JSON.stringify(values)))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <Input
            type='email'
            label='Email'
            name='email'
          />
          <Textarea
            label='Description'
            name='description'
          />
          <Select
            label='Select a topic'
            name='selectOption'
            options={dropdownOptions}
          />
          <RadioButtons
            label='Radio topic'
            name='radioOption'
            options={radioOptions}
          />
          <CheckboxGroup
            label='Checkbox topics'
            name='checkboxOption'
            options={checkboxOptions}
          />
          <DatePicker
            label='Pick a date'
            name='birthDate'
          />

          <button type='submit'>Enviar</button>
        </Form>
      )}
    </Formik>
  )
}

export default App