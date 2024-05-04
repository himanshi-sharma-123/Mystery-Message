import { z } from "zod";

export const acceptMessageSchemaSchema = z.object({
  acceptMessages: z.boolean(),
});
