import { CpfCnpjMask } from '../../lib/masks'

test('getType results cpf_cnpj', () => {
    var expected = 'cpf-cnpj'
    var received = CpfCnpjMask.getType()

    expect(received).toBe(expected)
})

test('12312312356 results 123.123.123-56', () => {
    var mask = new CpfCnpjMask()
    var expected = '123.123.123-56'
    var received = mask.getValue('12312312356')

    expect(received).toBe(expected)
})

test('123123 results 123.123', () => {
    var mask = new CpfCnpjMask()
    var expected = '123.123'
    var received = mask.getValue('123123')

    expect(received).toBe(expected)
})

test('07833823678 results 078.338.236-78 and is valid', () => {
    var mask = new CpfCnpjMask()
    var expected = '078.338.236-78'
    var received = mask.getValue('07833823678')
    var isValid = mask.validate(received)

    expect(received).toBe(expected)
    expect(isValid).toBe(true)
})

test('11111111111 results 111.111.111-11 and is not valid', () => {
    var mask = new CpfCnpjMask()
    var expected = '111.111.111-11'
    var received = mask.getValue('11111111111')
    var isValid = mask.validate(received)

    expect(received).toBe(expected)
    expect(isValid).toBe(false)
})

test('1234567890 results 123.456.789-0 and is not valid', () => {
    var mask = new CpfCnpjMask()
    var expected = '123.456.789-0'
    var received = mask.getValue('1234567890')
    var isValid = mask.validate(received)

    expect(received).toBe(expected)
    expect(isValid).toBe(false)
})

test('12312312356 results 123.123.123-56 and raw value 12312312356', () => {
    var mask = new CpfCnpjMask()
    var expected = '123.123.123-56'
    var received = mask.getValue('12312312356')

    var expectedRawValue = '12312312356'
    var receivedRawValue = mask.getRawValue(received)

    expect(received).toBe(expected)
    expect(receivedRawValue).toBe(expectedRawValue)
})

test('empty cpf is invalid', () => {
    var mask = new CpfCnpjMask()
    var received = mask.validate('', {})

    expect(received).toBeFalsy()
})

test('getMask returns 999.999.999-99', () => {
    var mask = new CpfCnpjMask()
    var expected = '999.999.999-99'
    var received = mask.getMask()

    expect(received).toBe(expected)
})

test('79885262000130 results 79.885.262/0001-30', () => {
    var mask = new CpfCnpjMask()
    var expected = '79.885.262/0001-30'
    var received = mask.getValue('79885262000130')

    expect(received).toBe(expected)
})

test('798852982901 results 79.885.298/2901', () => {
    var mask = new CpfCnpjMask()
    var expected = '79.885.298/2901'
    var received = mask.getValue('798852982901')

    expect(received).toBe(expected)
})

test('79885262000130 results 79.885.262/0001-30 and is valid', () => {
    var mask = new CpfCnpjMask()
    var expected = '79.885.262/0001-30'
    var received = mask.getValue('79885262000130')
    var isValid = mask.validate(received)

    expect(received).toBe(expected)
    expect(isValid).toBe(true)
})

test('79885262000140 results 79.885.262/0001-40 and is not valid', () => {
    var mask = new CpfCnpjMask()
    var expected = '79.885.262/0001-40'
    var received = mask.getValue('79885262000140')
    var isValid = mask.validate(received)

    expect(received).toBe(expected)
    expect(isValid).toBe(false)
})

test('7988526200013 results 79.885.262/0001-3 and is not valid', () => {
    var mask = new CpfCnpjMask()
    var expected = '79.885.262/0001-3'
    var received = mask.getValue('7988526200013')
    var isValid = mask.validate(received)

    expect(received).toBe(expected)
    expect(isValid).toBe(false)
})

test('79885262000130 results 79.885.262/0001-30 and raw value 79885262000130', () => {
    var mask = new CpfCnpjMask()
    var expected = '79.885.262/0001-30'
    var received = mask.getValue('79885262000130')

    var expectedRawValue = '79885262000130'
    var receivedRawValue = mask.getRawValue(received)

    expect(received).toBe(expected)
    expect(receivedRawValue).toBe(expectedRawValue)
})

test('empty cnpj is invalid', () => {
    var mask = new CpfCnpjMask()
    var received = mask.validate('', {})

    expect(received).toBeFalsy()
})

test('getMask returns 99.999.999/9999-99', () => {
    var mask = new CpfCnpjMask()
    var expected = '99.999.999/9999-99'
    var received = mask.getMask('123456789012')

    expect(expected).toBe(received)
})
