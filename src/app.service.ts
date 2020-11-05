import { Injectable } from '@nestjs/common';
import { Block } from './data.transfer.input.output';

@Injectable()
export class AppService {
  getEmployee(fromDate: string, toDate: string): string {

    const block = new Block();
    block.blockName = 'fada';
    const value1 = ["fd"];
    block.colValue = [["dakjf", "dfjajfld"], value1];
    return `Hello World ${fromDate} - ${toDate}`;

    // const config = await getConfig()
    // const formData = new FormData()
    // formData.append('accountId', accountId)
    // formData.append('access_token', accessToken)
    // formData.append('provider', provider)
    // formData.append('remember_me', '1')

    // const reqConfig: AxiosRequestConfig = {
    //     data: formData,
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //     },
    //     method: 'post',
    //     timeout: 20000,
    //     url: config.SOCIAL_LOGIN_URI,

    // }

    // return Axios(reqConfig)
  }
}
