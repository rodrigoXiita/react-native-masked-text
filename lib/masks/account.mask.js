import BaseMask from './_base.mask'
import CustomMask from './custom.mask'

export default class AccountMask extends BaseMask {
    static getType() {
        return 'account'
    }

    getValue(value, settings) {
        const cleanedValue = super.removeNotNumbers(value)
        const mask = this.getMask(cleanedValue, settings)
        return CustomMask.shared.getValue(cleanedValue, { mask })
    }

    getRawValue(maskedValue, settings) {
        return super.removeNotNumbers(maskedValue)
    }

    validate(value, settings) {
        return (value || '').trim().length !== 0
    }

    getMask(value, settings) {
        let cleanedValue = super.removeNotNumbers(value);
        cleanedValue = cleanedValue.replace(/./g, '9');
        if (cleanedValue.length > 1) {
            const position = cleanedValue.length - 1;
            cleanedValue = cleanedValue.slice(0, position) + '-' + cleanedValue.slice(position);
        }
        return cleanedValue;
    }
}
