import {BankSlipMask} from "../../lib/masks";

test('getType results boleto', () => {
    var expected = 'bank-slip'
    var received = BankSlipMask.getType()

    expect(received).toBe(expected)
})
test('34191790010104351004791020150008684630026000 results 34191.79001 01043.510047 91020.150008 6 84630026000', () => {
    var mask = new BankSlipMask()
    var expected = '34191.79001 01043.510047 91020.150008 6 84630026000'
    var received = mask.getValue('34191790010104351004791020150008684630026000')

    expect(received).toBe(expected)
})

test('341917900101043510047910201500086 results 34191.79001 01043.510047 91020.150008 6', () => {
    var mask = new BankSlipMask()
    var expected = '34191.79001 01043.510047 91020.150008 6'
    var received = mask.getValue('341917900101043510047910201500086')

    expect(received).toBe(expected)
})


test('341917900101043510047 results 34191.79001 01043.510047', () => {
    var mask = new BankSlipMask()
    var expected = '34191.79001 01043.510047'
    var received = mask.getValue('341917900101043510047')

    expect(received).toBe(expected)
})