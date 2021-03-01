import { Axios } from './../Axios'

export const axiosLogin = async (id: string) => {
    try {
        const response = await Axios.get(`/${id}`)
        console.log(`ORE: ${JSON.stringify(response.data)}`)
        return response
    } catch (e) {
        const statusCode = e.response.status
        console.log(`ERROR from axiosLogin request: ${JSON.stringify(e.response.status)}`)
        if (+statusCode < 200 || +statusCode > 299) {
            return "GENERAL ERROR"
        }
        return e.response
    }
}

