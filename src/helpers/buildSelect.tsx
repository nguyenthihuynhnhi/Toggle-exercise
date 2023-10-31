
import { I_input, I_select } from '../interface/interface';


export function buildSelect(data: I_input[]) {

    const resultData = data.map((item) => {

        const result: I_select = { value: `${item.id}`, label: item.name };

        return result;
    });

    return resultData
}