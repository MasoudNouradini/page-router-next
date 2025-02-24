export type NewsListProps = {
  list: {
    id: number;
    name: string;
    username: string;
    address: {
      city: string;
      street: string;
    };
    website: string;
    body: string;
  }[];
};
