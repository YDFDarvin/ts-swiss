/** @see https://stackoverflow.com/a/49579497/9412937 */
type PublicOnly<T> = Pick<T, keyof T>

// TODO type PrivateOnly<T> = Omit<T, keyof T>
