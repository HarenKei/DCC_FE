import axios from "axios";

export interface API_DATA{
    RESULT_CODE: number,
    RESULT_MSG: string,
    RESULT_DATA: MainEvent | object
}

export interface MainEvent{
    email: string,
    name: string,
    index: number
}

const API_URL_BASE1 : string = process.env.NEXT_PUBLIC_API_BASE_URL as string;

const apiRequest = (apiURL : string, apiReqData : object) => {
    return new Promise((resolve) => {
        sendRequest(apiURL, apiReqData).then((apiResult : any) => {
            let apiResultCode = apiResult["RESULT_CODE"];
            let apiResultData = apiResult["RESULT_DATA"];
            let apiResultMsg = apiResult["RESULT_MSG"];

            if(apiResultCode != 200){
                console.log(apiResult);
                console.log(apiResultMsg);
                console.log("왜 안된대");
            }

            resolve(apiResultData);
        });
    })
};

const sendRequest = (url : string, data : object) => {
    return new Promise((resolve) => {
        axios.post(url, data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                resolve({
                    RESULT_CODE: 100,
                    RESULT_MSG: error as string
                });
            });
    });
}

export const getPostData = () => {
    let apiURL : string = `${API_URL_BASE1}/getPostData`;
    console.log(apiURL);
    return apiRequest(apiURL, {});
};