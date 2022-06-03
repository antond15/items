export type ItemProps = {
  label: string;
  tags: string[];
  description?: string;
};

export type ItemInterface = {
  [key: string]: ItemProps;
};
