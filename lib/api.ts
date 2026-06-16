import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// ─── Types ───────────────────────────────────────────────────────────────────

export type ApiError = {
  message: string;
  status: number;
  data?: unknown;
};

export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: ApiError };

// ─── Error guard ─────────────────────────────────────────────────────────────

function isApiError(err: unknown): err is ApiError {
  return (
    typeof err === "object" &&
    err !== null &&
    "message" in err &&
    "status" in err
  );
}

function toApiError(err: unknown): ApiError {
  if (isApiError(err)) return err;
  if (err instanceof Error) {
    return { message: err.message, status: 500 };
  }
  return { message: "Unknown error", status: 500 };
}

// ─── Client factory ──────────────────────────────────────────────────────────

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    timeout: 10_000,
  });

  client.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      try {
        if (typeof window !== "undefined") {
          const token = localStorage.getItem("token");
          if (token) {
            config.headers.set("Authorization", `Bearer ${token}`);
          }
        }
      } catch {
        // swallow storage errors
      }
      return config;
    },
    (error: unknown) => Promise.reject(error),
  );

  client.interceptors.response.use(
    (res: AxiosResponse) => res,
    (error: unknown) => {
      const axiosError = axios.isAxiosError(error) ? error : null;
      const normalized: ApiError = {
        message:
          axiosError?.response?.data?.message ??
          (error instanceof Error ? error.message : "Unknown error"),
        status: axiosError?.response?.status ?? 500,
        data: axiosError?.response?.data,
      };
      return Promise.reject(normalized);
    },
  );

  return client;
};

const apiClient = createApiClient();

// ─── Helpers ─────────────────────────────────────────────────────────────────

function toOk<T>(res: AxiosResponse<T>): ApiResult<T> {
  return { ok: true, data: res.data };
}

function toFail(err: unknown): ApiResult<never> {
  return { ok: false, error: toApiError(err) };
}

// ─── Methods ─────────────────────────────────────────────────────────────────

export async function apiGet<T = unknown>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<ApiResult<T>> {
  try {
    return toOk(await apiClient.get<T>(url, config));
  } catch (err) {
    return toFail(err);
  }
}

export async function apiPost<T = unknown, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig,
): Promise<ApiResult<T>> {
  try {
    return toOk(await apiClient.post<T>(url, body, config));
  } catch (err) {
    return toFail(err);
  }
}

export async function apiPut<T = unknown, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig,
): Promise<ApiResult<T>> {
  try {
    return toOk(await apiClient.put<T>(url, body, config));
  } catch (err) {
    return toFail(err);
  }
}

export async function apiDelete<T = unknown>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<ApiResult<T>> {
  try {
    return toOk(await apiClient.delete<T>(url, config));
  } catch (err) {
    return toFail(err);
  }
}

export default apiClient;
