import iconsArray from '../icon-list'

describe('Icon List', () => {
  it('Check array', () => {
    expect(Array.isArray(iconsArray)).toBeTruthy()
  })

  it('Check some items from array', () => {
    const haveItem = (itemName: string) =>
      iconsArray.find((icon) => icon.name === itemName)

    expect(haveItem('back')).toBeTruthy()
    expect(haveItem('bell')).toBeTruthy()
    expect(haveItem('box')).toBeTruthy()
    expect(haveItem('hello')).toBeFalsy()
  })
})
