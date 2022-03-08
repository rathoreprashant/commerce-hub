import { GetterTree } from 'vuex'
import RootState from '@/store/RootState'
import UtilState from './UtilState';

const getters: GetterTree <UtilState, RootState> = {
    getShipmentMethodDesc: (state) => (shipmentMethodTypeId: string) => {
        return state.shipmentMethod.find((data: any) => data.shipmentMethodTypeId === shipmentMethodTypeId)
    }
}
export default getters;