interface Page<T> {
  content: T[],
  totalPages: number;
  totalELements: number;
  numberOfElements: number;
  last: boolean;
  first: boolean;
  empty: boolean;
}

export default Page;