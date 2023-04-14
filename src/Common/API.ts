import axios from "axios";

export interface API_MEAL_DATA{
    DATA: MealData,
    RESULT:{
        RESULT_CODE: number,
        RESULT_MSG: string
    }
}

export interface MealData{
    msg: string,
    room: string,
    sender: string
}

// const API_URL_BASE : string = process.env.NEXT_PUBLIC_API_BASE_URL as string;
// DCC_BE URL
const API_MEAL_URL_BASE : string = process.env.NEXT_PUBLIC_MEAL_BASE_URL as string;
//학식 URL

const apiRequest = (apiURL : string, apiReqData : object) => {
    return new Promise((resolve) => {
        sendRequest(apiURL, apiReqData).then((apiResult : any) => {
            let apiResultCode = apiResult.data.RESULT.RESULT_CODE;
            let apiResultData = apiResult.data.DATA.msg;
            let apiResultMsg = apiResult.data.RESULT.RESULT_MSG;
            //apiResult는 Axios에서 넘기는 것인가?

            if(apiResultCode != 0){
                console.log(apiResultCode);
                console.log(apiResultMsg);
            }

            resolve(apiResultData);
        });
    })
};

const sendRequest = (url : string, data : object) => {
    return new Promise((resolve) => {
        axios.post(url, data)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                resolve({
                    RESULT_CODE: 100,
                    RESULT_MSG: error as string
                });
            });
    });
};

export const getMealData = () => {
    let apiURL : string = `https://wa-api.defcon.or.kr/getMessage`;
    let apiRequestData = {
        "msg" : "대림대 학식",
        "room" : "DCC_FE (DUC)",
        "sender" : "HarenKei"
    };

    return apiRequest(apiURL, apiRequestData);
};
