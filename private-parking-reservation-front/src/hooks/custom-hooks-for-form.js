import React, { useCallback } from 'react'
import FormInput from '../components/form-components/FormInput'
import SendFormButton from '../components/form-components/SendFormButton'

export const useFormInput = (setInput, input, className, placeholder) => {

    const handleOnChange = useCallback(event => {
        console.log(event.currentTarget.value)
        setInput(event.currentTarget.value)
    }, [])

    return <FormInput className={className}
        handleOnChange={handleOnChange}
        value={input}
        placeholder={placeholder} />
}

export const useFormSelect = (setSelect) => {
    return useCallback(event => {
        setSelect(event.currentTarget.value)
    }, [])
}

export const useFormSubmitButton = (inputs, setInputs, action, className, text) => {
    const handleOnSubmit = useCallback(event => {
        event.preventDefault()

        if (inputs.length === 1) {
            const input = inputs[0]
            const setInput = setInputs[0]
            if (input === '') {
                return
            }
            action(input)
            setInput('')
            return
        }

        let haveEmptyInput = inputs.includes('')
        console.log(haveEmptyInput)

        if (haveEmptyInput === false) {
            action(...inputs)
            setInputs.map(setInput => {
                setInput('')
            })
        }

    }, [action, ...inputs])

    return <SendFormButton className={className}
        handleOnSubmit={handleOnSubmit}
        text={text} />
}