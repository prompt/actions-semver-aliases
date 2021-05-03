# SemVer Aliases

A GitHub Action for generating the major and minor aliases of a
[Semantic Version][semver]: generate `v3` and `v3.14` from `v3.14.1`.

```
pr-mpt/actions-semver-aliases@v1
```

## Inputs

| ID | Description | Default | Examples |
| ---- | ----------- | ------- | -------- |
| **`version`** | **Semantic Version number** | **<kbd>required</kbd>** | **`v1.2.3` `1.2.3`** |
| `prefix` | String prefixed before each alias | `v` | `v` `app-` |
| `major` | Generate major version alias | `true` | |
| `minor` | Generate minor version alias | `true` | |
| `patch` | Generate patch version alias | `false` | |

## Outputs

| ID | Description | Examples |
| ---- | --------- | -------- |
| `list` | Newline separated string of aliases | ```v1\nv1.2``` |
| `csv` | Comma-separated string of aliases | `v1,v1.2` |

[semver]: https://semver.org/
