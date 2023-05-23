import axios from "./axios";
import Axios from "axios";

const getRequestConfig = (args) => {
  if (typeof args === "string") {
    return { url: args };
  }
  return args;
};

const axiosBaseQuery = ({ prepareHeaders, meta, transformResponse }) => {
  return async (args, api, extraOptions) => {
    try {
      const requestConfig = getRequestConfig(args);
      const result = await axios({
        ...requestConfig,
        headers: prepareHeaders
          ? prepareHeaders(requestConfig.headers || {}, api)
          : requestConfig.headers,
        signal: api.signal,
        ...extraOptions,
      });

      return {
        data: transformResponse ? transformResponse(result.data) : result.data
      }
    } catch (error) {
        if(!Axios.isAxiosError(error)) {
            return {
                error,
                meta
            }
        }

        return {
            error: {
                status: error.response?.status,
                data: error.response?.data || error.message
            },
            meta
        }
    }
  };
};

export default axiosBaseQuery
