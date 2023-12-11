import axios from "axios"

export const getallbillcall = () => {
    return axios.get('/api/bill/get')
}

export const deletebillcall = (id) => {
    return axios.delete(`/api/bill/delete/${id}`)
}

export const addbillcall = (bill) => {
    return axios.post('/api/bill/add', bill)
}

export const updatebillcall = (id, bill) => {
    return axios.patch(`/api/bill/update/${id}`, bill)
}