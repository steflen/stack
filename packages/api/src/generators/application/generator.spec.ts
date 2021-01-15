import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing'
import { readProjectConfiguration, Tree } from '@nrwl/devkit'

import generator from './generator'
import { ApplicationGeneratorSchema, ApplicationType } from './schema'

describe('api generator', () => {
  let appTree: Tree
  const options: ApplicationGeneratorSchema = { name: 'test', type: ApplicationType.nest }

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await generator(appTree, options)
    const config = readProjectConfiguration(appTree, 'test')
    expect(config).toBeDefined()
  })
})
