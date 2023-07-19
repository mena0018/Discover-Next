import { z } from 'zod';

const zGeo = z.object({
  lat: z.string(),
  lng: z.string(),
});

const zAddress = z.object({
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  geo: zGeo,
});

const zCompany = z.object({
  name: z.string(),
  catchPhrase: z.string(),
  bs: z.string(),
});

export const zUser = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  phone: z.string(),
  email: z.string(),
  website: z.string(),
  address: zAddress,
  company: zCompany,
});
export type User = z.infer<typeof zUser>;

export const zUsers = z.array(zUser);
