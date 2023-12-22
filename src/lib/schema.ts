import { z } from 'zod';

const nameSchema = z.object({
  name: z.string()	
  .min(1, { message: 'This field has to be filled.' })
  .max(10, { message: 'Max length 10 characters' }),
});
const colorSchema = z.object({
  color: z.string()	
  .min(1, { message: 'This field has to be filled.' })
  .max(10, { message: 'Max length 10 characters' }),
});

type NameSchemaType = typeof nameSchema;
type ColorSchemaType = typeof colorSchema;

export { nameSchema, colorSchema }
export type { NameSchemaType, ColorSchemaType }