import { isConformant as baseIsConformant } from '@fluentui/react-conformance';
import griffelTests from '@fluentui/react-conformance-griffel';
import type { IsConformantOptions, TestObject } from '@fluentui/react-conformance';

export function isConformant<TProps = {}>(
  testInfo: Omit<IsConformantOptions<TProps>, 'componentPath'> & { componentPath?: string },
) {
  const defaultOptions: Partial<IsConformantOptions<TProps>> = {
    asPropHandlesRef: true,
    componentPath: module!.parent!.filename.replace('.test', ''),
    disabledTests: ['has-docblock'],
    extraTests: griffelTests as TestObject<TProps>,
  };

  baseIsConformant(defaultOptions, testInfo);
}
