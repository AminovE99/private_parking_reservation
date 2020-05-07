export const fetchJSON = async (url, reqParams) => {
    let response = reqParams === null ?
        await fetch(url) :
        await fetch(url, reqParams)

    if (response.status === 200 || response.status === 201) {
        return response.json()
    } else {
        throw Error(response.statusText)
    }
}

export const fetchData = async (dispatch, url, requestData, receiveData, handleError) => {
    dispatch(requestData({ isFetching: true }))
    try {
        const data = await fetchJSON(url)
        dispatch(receiveData(data))
        dispatch(handleError({ didInvalidate: false }))
    } catch (error) {
        console.log(error)
        dispatch(handleError({ didInvalidate: true }))
    }
    dispatch(requestData({ isFetching: false }))
}

export const addEntity = async (dispatch, dataToAdd, url, addEntity) => {
    try {
        const entityToAdd = await fetchJSON(
            url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToAdd)
            }
        )

        dispatch(addEntity(entityToAdd))
    } catch (error) {
        console.log(error)
    }
}

export const updateEntity = async (dispatch, dataToUpdate, url, updateEntity) => {
    try {
        const entityToUpdate = await fetchJSON(
            url,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToUpdate)
            }
        )
        console.log(entityToUpdate)

        dispatch(updateEntity(entityToUpdate))
    } catch (error) {
        console.log(error)
    }
}

export const deleteEntity = async () => {

}