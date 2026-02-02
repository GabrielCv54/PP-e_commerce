import axios from "axios"

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000/ecompre',
    headers:{
        'Content-Type':'application/json'
    }
});

api.interceptors.response.use(
    response => response,
    error => {
        console.error(`Erro durante a conexão: ${error}`,{
            url: error.config?.url,
            message: error.message,
            status: error.response?.status
        })
        return Promise.reject(error)
    }
);


// Produto
export const getProducts = async () =>{const response = await api.get('produtos'); return response.data};
export const getProduct = (nome) => api.get(`produtos/${nome}`);
export const getProductId = (id) => api.get(`/produtos/${id}`);
export const postProducts = (data) => api.post(`produtos`,data);
export const putProduct = (id,data) => api.put(`produtos/${id}`,data);
export const deleteProduct =(id) => api.delete(`produtos/${id}`);

// Clientes
export const getClients = async() => {const response = await api.get('clientes'); return response.data}
export const loginClients = async(data) => api.post("/clientes/login",data)
export const registerClients = async(data) => api.post('/clientes/cadastro',data)

// Fornecedores



export default api;