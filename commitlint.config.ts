import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-atom',
  formatter: '@commitlint/format',
  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'revert',
        'build',
        'ci',
        'perf',
      ],
    ],
    'body-leading-blank': [RuleConfigSeverity.Error, 'always'],
    'header-max-length': [RuleConfigSeverity.Error, 'always', 72],
    'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'],
    'subject-case': [RuleConfigSeverity.Disabled, 'never', 'camel-case'],
  },
};

export default Configuration;
