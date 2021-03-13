import { resolve } from 'path'
import { createResolveVueAliasFactory } from '../../../src/shared/index'

const viewRoutePath = resolve(__dirname, '../../mock/view')
describe('utils', () => {
  it('createResolveVueAliasFactory', () => {
    const resolveVueAlias = createResolveVueAliasFactory(viewRoutePath)

    const filepath1 = resolveVueAlias('@/component.js')
    const filepath1ExpectValue = resolve(viewRoutePath, './src/component.js')
    const filepath2 = resolveVueAlias('./main.js')
    const filepath2ExpectValue = resolve(viewRoutePath, './main.js')
    expect(filepath1).toBe(filepath1ExpectValue)
    expect(filepath2).toBe(filepath2ExpectValue)
  })
})
