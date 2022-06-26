/**
 * Login Type
 */
export interface Login {
    tenant: string,
    name: string,
    salt: string,
    password: string
}