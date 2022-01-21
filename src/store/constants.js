const INPUT_DESCRIBES = {
    TEXT: {
        type: 'text',
        componentName: 'ui-input-text'
    },
    NUMBER: {
        type: 'number',
        componentName: 'UiInputNumber'
    },
    EMAIL: {
        type: 'email',
        componentName: 'ui-input-email'
    },
    PASSWORD: {
        type: 'password',
        componentName: 'ui-input-password'
    },
    DATE: {
        type: 'date',
        componentName: 'UiInputDate'
    },
    DATETIME_LOCAL: {
        type: 'datetime-local',
        componentName: 'UiInputDateTime'
    },
    RANGE: {
        type: 'range',
        componentName: 'UiInputRange'
    },
    PHONE: {
        type: 'tel',
        componentName: 'UiInputPhone'
    },
    TIME: {
        type: 'time',
        componentName: 'UiInputTime'
    },
    URL: {
        type: 'url',
        componentName: 'UiInputUrl'
    },
    SEARCH: {
        type: 'search',
        componentName: 'UiInputSearch'
    },
    MONTH: {
        type: 'month',
        componentName: 'UiInputMonth'
    },
    WEEK: {
        type: 'week',
        componentName: 'UiInputWeek'
    },
    CHECKBOX: {
        type: 'checkbox',
        componentName: "UiInputCheckbox"
    },
    RADIO: {
        type: 'radio',
        componentName: 'UiInputRadio'
    },
    FILE: {
        type: 'file',
        componentName: 'UiInputFile'
    },
    COLOR: {
        type: 'color',
        componentName: 'UiInputColor'
    }
}

const INPUT_MESSAGE_TYPES = {
    TYPES: {
        TIP: 'tip',
        INFO: 'info',
        SUCCESS: 'success',
        ERROR: 'error',
        LOADING: 'loading',
        LOADING_ERROR: 'loading-error',
        LOADING_SUCCESS: 'loading-success'
    },
    SIMPLE_TYPES: ['tip', 'info', 'success', 'error'],
    LOADING_TYPES: ['loading', 'loading-error', 'loading-success']
}

export { INPUT_DESCRIBES, INPUT_MESSAGE_TYPES }