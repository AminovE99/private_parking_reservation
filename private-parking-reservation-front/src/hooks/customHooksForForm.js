import { useCallback } from 'react'

export const useFormInput = (setInput) => {
    return useCallback(event => {
        console.log(event.currentTarget.value)
        setInput(event.currentTarget.value)
    }, [])
}

export const useFormSelect = (setSelect) => {
    return useCallback(event => {
        setSelect(event.currentTarget.value)
    }, [])
}

export const useFormSubmit = (inputs, setInputs, action) => {
    return useCallback(event => {
        event.preventDefault()

        if (inputs.size === 1) {
            const input = inputs.get(0)
            const setInput = setInputs.get(0)
            if (input === '') {
                return
            }
            action(input)
            setInput('')
        }

        let inputsNotNull = true

        inputs.map(input => {
            console.log(input)
            if (input === '') {
                inputsNotNull = false
                return
            }
        })

        if (inputsNotNull === true) {
            action(...inputs)
            setInputs.map(setInput => {
                setInput('')
            })
        }

    }, [action, ...inputs])
}