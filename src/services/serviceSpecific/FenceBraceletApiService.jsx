import {ApiService} from "..";

export default class FenceApiService extends ApiService{
    constructor(){
        super('/fences');
    }

    save(config){
        return this.post('/registerBracelet', {}, config);
    }

    delete(config){
        return super.delete('/removeBracelet', config);
    }
}
