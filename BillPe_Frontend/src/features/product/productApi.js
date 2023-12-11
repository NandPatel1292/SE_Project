import axios from "axios"

export const getallproductcall = () => {
    return axios.get('/api/product/get')
}

export const deleteproductcall = (id) => {
    return axios.delete(`/api/product/delete/${id}`)
}

export const addproductcall = (product) => {
    return axios.post('/api/product/add', product)
}