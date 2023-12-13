type Address = { address: string; city: string };

type PresentDeliveryList<T> = {
    [Prop in keyof T]: Address
};

// More explicit by extending Object/Record type
// type PresentDeliveryList<T extends Record<string, unknown>> = {
//     [Prop in keyof T]: Address
// };
