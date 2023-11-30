import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  inputName: string
  registerSettings: object
  inputType: string
  errorMessages: Record<string, Record<string, React.ReactNode>>
  errors: Record<string, any>
  register: UseFormRegister<FieldValues>
}

function Input({ inputName, registerSettings, inputType, errorMessages, register, errors }: Props) {
  const inputStyles = 'w-full rounded-md bg-blue-3 mt-5 first:mt-0 px-5 py-3 placeholder-white-3 text-white-1'
  const errorStyles = 'text-red-2 px-5'

  const inputTitle = inputName[0].toUpperCase() + inputName.slice(1)
  const errorType = errors[inputName]?.type

  return (
    <>
      {inputType === 'input' ? (
        <input
          className={inputStyles}
          type='text'
          placeholder={`${inputTitle}...`}
          {...register(inputName, { ...registerSettings })}
        />
      ) : (
        <textarea
          className={inputStyles}
          rows={4}
          cols={50}
          placeholder={`${inputTitle}...`}
          {...register('message', {
            required: true,
            maxLength: 2000,
          })}
        />
      )}

      {errors[inputName] && <p className={errorStyles}>{errorMessages[inputName][errorType]}</p>}
    </>
  )
}

export default Input
