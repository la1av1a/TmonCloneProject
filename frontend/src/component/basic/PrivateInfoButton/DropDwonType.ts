
export enum DROPDOWN_TYPE {
    ORDER_N_DELIVERY = "ORDER_N_DELIVERY",
    CANCEL_N_REFUND = "CANCEL_N_REFUND",
    CASH_N_RESERVE = "CASH_N_RESERVE",
    DISCOUNT = "DISCOUNT",
    LAST_SEEN = "LAST_SEEN",
    PICKKED = "PICKKED",
}

export type PopupPresetType = { [key in keyof typeof DROPDOWN_TYPE]: {
    title: string,
    redirectionUrl: string,
} };
