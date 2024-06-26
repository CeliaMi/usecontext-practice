import axios from "axios";

    export const API_URL = "http://localhost:3000/api/books";

    export const getAllBooks = async () => {
        try {
        const res = await axios.get(API_URL);
        return res.data;
        } catch (error){
            console.error('getAllBooks error ', error.message);
            throw error;
        }
    };

    export const getOneBook = async (id) => {
        try {
            const res = await axios.get(`${API_URL}/${id}`);
            return res;
        } catch (error) {
            console.error(`getOneBook ID ${id} error:`, error.message);
            throw error;
          }

    };

    export const createBook = async (data) => {
        try {
            const headers = getToken()
            const res = await axios.post(API_URL, data, { headers } );
            return res;
        }  catch (error) {
            console.error('createBook error:', error.message);
            throw error;
          }

    };

    export const deleteBook = async (id) => {
        try{
        console.log("hola")
        let URL_ID = `${API_URL}/${id}`;
        const res = await axios.delete(URL_ID);
        return res;
        }  catch (error) {
            console.error(`deleteBook ID ${id} error:`, error.message);
            throw error;
        }}

    export const updateBook = async (data) => {
        try{
        let URL_ID = `${API_URL}/${data.id}`;
        const res = await axios.put(URL_ID,data);
        return res;
        } catch(error) {
            console.error(`Error en updateBook con ID ${data.id}:`, error.message);
            throw error;
        }
    };
    
 