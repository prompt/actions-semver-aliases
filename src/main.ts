import * as core from '@actions/core'
import {generateVersionAliases} from './aliases'

async function run(): Promise<void> {
  try {
    const version: string = core.getInput('version')
    const prefix: string = core.getInput('prefix')

    core.debug(`Generating SemVer aliases for ${version} with prefix ${prefix}`)

    const aliases: String[] = generateVersionAliases(version, prefix, {
      major: core.getInput('major') === 'true',
      minor: core.getInput('minor') === 'true',
      patch: core.getInput('patch') === 'true'
    })

    core.debug(`Aliases generated: ${JSON.stringify(aliases)}`)

    core.setOutput('csv', aliases.join(','))
    core.setOutput('list', aliases.join('\n'))
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
