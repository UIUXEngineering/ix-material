import { getNative } from './get-native';

/* Built-in method references that are verified to be native. */
import { root } from './root';

export const DataView = getNative(root, 'DataView');
