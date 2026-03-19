import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPath";

const getDocuments = async () => {
  try {
    const resposne = await axiosInstance.get(API_PATHS.DOCUMENTS.GET_DOCUMENTS);
    return resposne.data?.data;
  } catch (e) {
    throw e.resposne?.data || { message: "Failed to fetch documents" };
  }
};

const uplaodDocument = async (formData) => {
  try {
    const resposne = await axiosInstance.post(
      API_PATHS.DOCUMENTS.UPLOAD,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return resposne.data;
  } catch (e) {
    throw e.resposne?.data || { message: "Failed to upload document" };
  }
};

const deleteDocument = async (id) => {
  try {
    const response = await axiosInstance.delete(
      API_PATHS.DOCUMENTS.DELETE_DOCUMENT(id),
    );
    return response.data;
  } catch (e) {
    throw e.response?.data || { message: "Failed to delete document" };
  }
};

const getDocumentById = async (id) => {
  try {
    const response = await axiosInstance.get(
      API_PATHS.DOCUMENTS.GET_DOCUMENT_BY_ID(id),
    );
    return response.data;
  } catch (e) {
    throw e.response?.data || { message: "Failed to fetch details" };
  }
};

const documentService = {
  getDocuments,
  uplaodDocument,
  deleteDocument,
  getDocumentById,
};

export default documentService;
