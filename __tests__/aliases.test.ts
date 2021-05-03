import {generateVersionAliases, AliasOptions} from '../src/aliases'

describe('alias generator', () => {
  test('throws error when given non-semver version', () => {
    const options: AliasOptions = {major: true, minor: false, patch: false}

    expect(() => {
      generateVersionAliases('invalid-version', 'prefix', options)
    }).toThrow(TypeError)
  })

  test('generates version alias with prefix', async () => {
    const options: AliasOptions = {major: true, minor: false, patch: false}

    const aliases: String[] = generateVersionAliases('1.0.0', 'prefix', options)

    expect(aliases).toStrictEqual(['prefix1'])
  })

  test('generates major version alias', async () => {
    const options: AliasOptions = {major: true, minor: false, patch: false}

    const aliases: String[] = generateVersionAliases('1.2.3', 'v', options)

    expect(aliases).toStrictEqual(['v1'])
  })

  test('generates minor version alias', async () => {
    const options: AliasOptions = {major: false, minor: true, patch: false}

    const aliases: String[] = generateVersionAliases('1.2.3', 'v', options)

    expect(aliases).toStrictEqual(['v1.2'])
  })

  test('generates major + minor version aliases', async () => {
    const options: AliasOptions = {major: true, minor: true, patch: false}

    const aliases: String[] = generateVersionAliases('1.2.3', 'v', options)

    expect(aliases).toStrictEqual(['v1', 'v1.2'])
  })

  test('generates major + minor + patch version aliases', async () => {
    const options: AliasOptions = {major: true, minor: true, patch: true}

    const aliases: String[] = generateVersionAliases('1.2.3', 'v', options)

    expect(aliases).toStrictEqual(['v1', 'v1.2', 'v1.2.3'])
  })

  test('generates no version aliases', async () => {
    const options: AliasOptions = {major: false, minor: false, patch: false}

    const aliases: String[] = generateVersionAliases('1.0.0', 'v', options)

    expect(aliases).toStrictEqual([])
  })

  test('generates no version aliases for prereleases', async () => {
    const options: AliasOptions = {major: true, minor: true, patch: true}

    const aliases: String[] = generateVersionAliases(
      '1.0.0-alpha.1',
      'v',
      options
    )

    expect(aliases).toStrictEqual([])
  })
})
