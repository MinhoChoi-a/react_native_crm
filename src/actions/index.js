export const selectPerson = (peopleId) => {
    return {
        type: 'SELECTED_PERSON',
        selectId: peopleId,
    }
};

export const nonSelected =  () => {
    return {
        type: 'NONE_SELECTED',
    }
};

