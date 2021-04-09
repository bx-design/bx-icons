import iconList from '../icon-list'
import { IconsNamesListType } from '../types'

describe('Icon List', () => {
  it('Check array', () => {
    expect(typeof iconList === 'object').toBeTruthy()
  })

  it('Check some items from array', () => {
    const haveItem = (itemName: IconsNamesListType) => iconList[itemName]

    expect(haveItem('back')).toBeTruthy()
    expect(haveItem('bell')).toBeTruthy()
    expect(haveItem('box')).toBeTruthy()
  })
})
