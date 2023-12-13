// type SantasList<BadList extends any[], GoodList extends any[]> = [...BadList, ...GoodList];

// Must be read only array because
// [name, name2, name2] as const is being passed in
type SantasList<BadList extends ReadonlyArray<unknown>, GoodList extends ReadonlyArray<unknown>> = [...BadList, ...GoodList];
