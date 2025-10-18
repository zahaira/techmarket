import { z as zod } from "zod";

type InputProps = {
  message?: {
    required_error?: string;
    invalid_type_error?: string;
  };
};

export const schemaHelper = {
  phoneNumber: (props?: InputProps) =>
    zod
      .string()
      .min(1, {
        message: props?.message?.required_error ?? "Phone number is required!",
      })
      .refine((data) => /^(6|7)[0-9]{8}$/.test(data.replace(/\s+/g, "")), {
        message:
          "Invalid phone number (must start with 6 or 7 and have 9 digits).",
      }),
  phoneNumberOptional: () =>
    zod
      .string()
      .refine(
        (data) => !data || /^(6|7)[0-9]{8}$/.test(data.replace(/\s+/g, "")),
        {
          message:
            "Invalid phone number (must start with 6 or 7 and have 9 digits).",
        }
      )
      .optional(),
};
