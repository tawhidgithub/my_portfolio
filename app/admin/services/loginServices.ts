import { ApiResponseType } from "@/app/type/responseType";
import api from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoient";

type LoginResponse = {
  token: string;
  user: {
    id: string;
    email: string;
  };
};

export const loginServices = async (payload: {
  email: string;
  password: string;
}) => {
  try {
    const body = {
      email: payload.email,
      password: payload.password,
    };

    const res = await api.post<ApiResponseType<any>>(ENDPOINTS.login, body);

    return res.data as LoginResponse;
  } catch (error) {
    throw error;
  }
};
