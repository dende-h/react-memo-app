const token: string | null = localStorage.getItem("authToken");

export const headersAuth = { Authorization: `Bearer ${token}` };
export const headers = { "Content-Type": "application/json" };
export const apiHeaders = { headers, headersAuth };
