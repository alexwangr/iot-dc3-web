/**
 * Response Type
 */
export default interface Response<T> {
    ok: boolean,
    code: number,
    message: string,
    data: T
}