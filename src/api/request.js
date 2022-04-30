import axios from "axios";

// const baseURL = import.meta.env.VITE_HOST_API
const baseURL = 'https://cai-music-1873383-1309308419.ap-shanghai.run.tcloudbase.com'

const instance = axios.create({
    baseURL
});

const {get,post,put} = instance
export {get,post,put}