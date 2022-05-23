# Formik Input Components

### ✨Quick Start
create a clone of repository and run the project using the follow commands

```
#cloning repository

#install dependencies
yarn install or yarn

#start project
yarn start
```
### 😎All Input components



```
Input
Textarea
Select
Checkbox
Radiobutton
Datepicker
```

| Component    | Props       |
| -----------  | ----------- |
| Input        | name, label, ...rest       |
| Textarea     | name, label, ...rest       |
| Select       | name, label, options, ...rest       |
| Checkbox     | name, label, options, ...rest       |
| Radiobutton  | name, label,options, ...rest       |
| Datepicker   | name, label, ...rest        |

the ***options*** is array of objects
```
const dropdownOptions = [
  { key: 'Option 1', value: 'option1' },
  { key: 'Option 2', value: 'option2' },
  { key: 'Option 3', value: 'option3' }
]
```

### 💖How to use

only need to import a required component and use them

```
import { Input } from './components/Formik'

return(
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
          <button type='submit'>Enviar</button>
        </Form>
      )}
    </Formik>
)
```


