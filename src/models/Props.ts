import { Post } from './Post';
import { FieldErrors, RegisterOptions } from 'react-hook-form';

export type ParamsID = {
  params: {
    id: string;
  };
};

export type LinkProps = {
  name: string;
  route: string;
  isPost?: boolean;
};

export type FieldProps = {
  property: keyof Post;
  errors: FieldErrors | any;
  isNumberField?: boolean;
  register: (property: keyof Post, params: RegisterOptions | any) => {};
};

export type Notification = {
  text: string;
  color: 'green' | 'red';
};

export type NotificationRef = {
  addNotificationRef: { current: (notification: Notification) => void };
};
