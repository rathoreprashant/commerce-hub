export default interface OrderState {
  list: {
    orders: any[],
    total: number
  },
  poIds: any,
  query: any,
  current: any,
  validStatusChange: any
  stuck: {
    orders: any[],
    total: number,
  },
  oldExpedited: {
    orders: any[],
    total: number,
  },
  orderFacilityChange: any
}