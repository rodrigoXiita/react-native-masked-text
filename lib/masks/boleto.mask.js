import BaseMask from './_base.mask'
import CustomMask from './custom.mask'

const BOLETO_MASK = "99999.99999 99999.999999 99999.999999 9 99999999999999";

export default class BoletoMask extends BaseMask {
    static getType(){
        return 'boleto'
    }

    getValue(value, settings){
        let cleanedValue = super.removeNotNumbers(value);
        let mask = this.getMask(cleanedValue, settings);
        return CustomMask.shared.getValue(cleanedValue, {mask})
    }

    getRawValue(maskedValue, settings) {
        return super.getRawValue(maskedValue, settings);
    }

    validate(value, settings){
        let valueToValidade = super.getDefaultValue(value);
        valueToValidade = this.getValue(value, settings);
        return valueToValidade.length === mask.length;
    }

    getMask(value, settings) {
         return BOLETO_MASK;
    }
}