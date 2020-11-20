import { AccountMask } from '../../lib/masks'

test('getType results account', () => {
    var expected = 'account'
    var received = AccountMask.getType()

    expect(received).toBe(expected)
})

test('123456 results 12345-6', () => {
    var mask = new AccountMask()
    var expected = '12345-6'
    var received = mask.getValue('123456')

    expect(received).toBe(expected)
})

test('1 results 1', () => {
    var mask = new AccountMask()
    var expected = '1'
    var received = mask.getValue('1')

    expect(received).toBe(expected)
})

test('12 results 1-2', () => {
    var mask = new AccountMask()
    var expected = '1-2'
    var received = mask.getValue('12')

    expect(received).toBe(expected)
})

test('"" is not valid', () => {
    var mask = new AccountMask()
    var expected = false
    var received = mask.validate('')

    expect(received).toBe(expected)
})

test('5188888888 is valid', () => {
    var mask = new AccountMask()
    var isValid = mask.validate('5188888888')

    expect(isValid).toBe(true)
})

test('765467 results 76546-7 and raw value 765467', () => {
    var mask = new AccountMask()
    var expected = '76546-7'
    var received = mask.getValue('765467')

    var expectedRawValue = '765467'
    var receivedRawValue = mask.getRawValue(received)

    expect(received).toBe(expected)
    expect(receivedRawValue).toBe(expectedRawValue)
})

test('getMask for 765467 returns 99999-9', () => {
    var mask = new AccountMask()
    var expected = '99999-9'
    var received = mask.getMask('765467')

    expect(received).toBe(expected)
})

test('getMask for 6 returns 9', () => {
    var mask = new AccountMask()
    var expected = '9'
    var received = mask.getMask('6')

    expect(received).toBe(expected)
})
