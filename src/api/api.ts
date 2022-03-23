import axios from "axios";
import {ProfileType} from "../redux/profileReducer";
import {FormProfileDataType} from "../components/Profile/ProfileInfo/ProfileDataForm";

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
        return instance.post(`follow/${userId}`)

    },

    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId: number) {
        console.warn("Obsolete method. Please profileAPI object.")
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status})
    },
    savePhoto(photoFile: string) {
        const formData= new FormData()
        formData.append("image", photoFile)

        return instance.put(`profile/photo/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    saveProfile(formData: FormProfileDataType) {
        return instance.put(`profile`, formData)
    },

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logOuth() {
        return instance.delete(`auth/login`)
    }
}