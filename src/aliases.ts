import * as semver from 'semver'

export interface AliasOptions {
  major: boolean
  minor: boolean
  patch: boolean
}

export function generateVersionAliases(
  version: string,
  prefix: string,
  options: AliasOptions
): String[] {
  const v: semver.SemVer = new semver.SemVer(version)

  if (v.prerelease.length !== 0) {
    return []
  }

  const aliases = {
    major: `${prefix}${v.major}`,
    minor: `${prefix}${v.major}.${v.minor}`,
    patch: `${prefix}${v.major}.${v.minor}.${v.patch}`
  }

  return Object.entries(aliases)
    .filter(([option]) => options[option as keyof typeof options] === true)
    .map(([, alias]) => alias)
}
