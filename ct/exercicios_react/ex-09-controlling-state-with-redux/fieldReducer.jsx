const INITITAL_VALUE = { value: 'Ho Hi' };

export default function(state = INITITAL_VALUE, action) {
    switch(action.type) {
        case 'VALUE_CHANGED':
            return { value: action.payload };
        default: 
            return state;
    }
}