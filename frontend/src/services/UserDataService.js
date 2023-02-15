import http from '../http-common'

class UserDataService {
    getAll() {
        return http.get('/login')
    }
    /*
        get(id) {
            return http.get(`/customers/${id}`)
        }
    
        create(data) {
            return http.post('/customers', data)
        }
    
        update(id, data) {
            return http.put(`/customers/${id}`, data)
        }
    
        delete(id) {
            return http.delete(`/customers/${id}`)
        }
        */
}

export default new UserDataService()
