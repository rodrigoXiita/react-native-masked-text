import BaseMask from './_base.mask'
import CustomMask from './custom.mask'

import {CPF_MASK, validateCPF} from "./cpf.mask";
import {CNPJ_MASK, validateCnpj} from "./cnpj.mask";

export const validateCpfCnpj = value => {
    if (value === '') {
        return true
    }

    value = value.toString().replace(/\.|\-|\//g, '')

    if (value.length <= 11) {
        return validateCPF(value)
    }

    return validateCnpj(value)
}

const maskOptionsCpf = { mask: CPF_MASK }
const maskOptionsCnpj = { mask: CNPJ_MASK }

export default class CpfMask extends BaseMask {
    static getType() {
        return 'cpf-cnpj'
    }

    getValue(value, settings) {
        const onlyNumbers = this.getRawValue(value);
        if (onlyNumbers.length <= 11) {
            return CustomMask.shared.getValue(value, maskOptionsCpf)
        }
        return CustomMask.shared.getValue(value, maskOptionsCnpj)
    }

    getRawValue(maskedValue, settings) {
        return super.removeNotNumbers(maskedValue)
    }

    validate(value, settings) {
        const isEmpty = (value || '').trim().length === 0
        return !isEmpty && validateCpfCnpj(value)
    }

    getMask(value, settings) {
        const onlyNumbers = this.getRawValue(value || '');
        if (onlyNumbers.length <= 11) {
            return CPF_MASK
        }
        return CNPJ_MASK
    }
}
