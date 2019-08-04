import axios from 'axios'
let http = axios.create({
    baseURL: "http://localhost:3000",
})
class user {
    static create (parma) {
       return http.post('/users/create',parma).then(response => response)
    }
    static getUesrAll () {
        return http.get('/users/getUesrAll').then(response => response)
    }
    static deleteUserById (parma) {
        return http.get('/users/deleteUserById', {
            params: {
                id: parma
            }
        }).then(response => response)
    }
    static updataUserById (parma) {
        return http.post('/users/updataUserById',parma).then(response => response)
    }
}
export { user }