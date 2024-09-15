export type CommonResponse<T> = {
  message?: string;
  status?: string | number;
  data?: T;
};
