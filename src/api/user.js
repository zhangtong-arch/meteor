import axios from 'axios'
let http = axios.create({
    baseURL: "http://localhost:3000",
})
class user {
    static save (item) {
       return http.post('/users/login',item).then(response => response)
    }
    static getInfo () {
        return http.get('/users/findAll').then(response => response)
    }
    static getReadFile () {
        return http.get('/users/getFileInfo').then(response => response)
    }
}
export {user}