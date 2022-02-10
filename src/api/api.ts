import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "3ffd8bee-6a2a-4b2d-9367-b8070697f4c5"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    follow(userId: number) {
        return instance.post(`/follow/${userId}`)

    },

    unfollow(userId: number) {
        return instance.delete(`/follow/${userId}`)
    },
}

