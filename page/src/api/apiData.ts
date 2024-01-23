


export const dataApi = {
    url_base: import.meta.env.VITE_URL_BASE as string,
    headers: {
        login: {
            allow: 'whtzhB2uNPDN$Az',
            'Content-Type': "application/json"
        },
        getSolves: (authorization: string) => {
            return {
                authorization,
                allow: 'whtzhB2uNPDN$Az'
            }
        },
        addSolve: (authorization: string) => {
            return {
                authorization,
                allow: 'whtzhB2uNPDN$Az',
                'Content-Type': "application/json"
            }
        }
    }
}
