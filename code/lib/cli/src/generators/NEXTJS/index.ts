import { baseGenerator } from '../baseGenerator';
import type { Generator } from '../types';

const generator: Generator = async (packageManager, npmOptions, options) => {
  await baseGenerator(
    packageManager,
    npmOptions,
    options,
    'react',
    {
      extraAddons: ['@storybook/addon-onboarding'],
    },
    'nextjs'
  );
};

export default generator;
