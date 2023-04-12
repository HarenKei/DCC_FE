import axios from "axios";

export interface API_DATA{
    RESULT_CODE: number,
    RESULT_MSG: string,
    RESULT_DATA: object
}

export interface MEAL_DATA{
    RESULT: {
        RESULT_CODE: number,
        RESULT_MSG: string
    },
    DATA: {
        msg: string,
        room: string,
        sender: string
    }
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
            }

            resolve(apiResultData);
        });
    })
};

const sendRequest = (url : string, data : object) => {
    return new Promise((resolve) => {
        axios.get(url, data)
            .then((response) => {
                console.log(response.data);
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
    let apiURL : string = `${API_URL_BASE1}/getGetData`;
    console.log("겟데이터데이터" + apiRequest(apiURL, {}));
    return apiRequest(apiURL, {});
};

export const getMealData = () => {
    let apiURL : string = `wa-api.defcon.or.kr/`;
    let mealData = {
        msg: "대림대 학식",
        room: "채팅방 1",
        sender: "harenkei"
    }
    
    console.log("학식" + apiRequest(apiURL, mealData));
    return apiRequest(apiURL, mealData)
};