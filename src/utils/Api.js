import { MAIN_URL } from "./constants";

class MainApi {
    constructor(apiOptions) {
        this._url = apiOptions.url;
    }

    async _sendRequest(path, requestOptions,) {

        try {
            const response = await fetch(`${this._url}${path}`, { ...requestOptions });
            console.log({ response })

            if (!response.ok) {
                throw response;
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    };

    getAllPosts() {

        return this._sendRequest(
            ``,
            {
                method: 'GET',
            },
        );
    };

};

const api = new MainApi({ url: MAIN_URL });

export default api;