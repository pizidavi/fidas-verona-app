/**
 * Validate required field
 * @param value Value
 * @returns Error message
 */
export const validateRequired = (value: string) => (value === '' ? 'errors:required' : undefined);
