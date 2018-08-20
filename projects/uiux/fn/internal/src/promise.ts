import { getNative } from './get-native';
import { root } from './root';

/* Built-in method references that are verified to be native. */
export const Promise = getNative(root, 'Promise');
