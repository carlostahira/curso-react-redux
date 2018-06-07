export function changeValue(e) {
    console.log('field action!');
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}