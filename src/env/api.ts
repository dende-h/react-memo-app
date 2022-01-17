import axios from "axios";

const token: string | null = localStorage.getItem("authToken");

const baseURL: string | undefined = `https://raisetech-memo-api.herokuapp.com/api`;
const headers = { "Content-Type": "application/json" };
const headersAuth = { Authorization: `Bearer ${token}` };
const postHeaders = { "Content-Type": "application/json", Authorization: `Bearer ${token}` };

export const loginApi = axios.create({
	baseURL,
	headers
});

export const getMemoApi = axios.create({
	baseURL,
	headers: headersAuth
});

export const inputMemoApi = axios.create({
	baseURL,
	headers: postHeaders
});

export const editMemoApi = axios.create({
	baseURL,
	headers: postHeaders
});

export const deleteMemoApi = axios.create({
	baseURL,
	headers: headersAuth
});
