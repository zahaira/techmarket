import { CustomButton } from "@/components/CustomButton";
import { schemaHelper } from "@/components/hook-form/schema-helper";
import { TextInput } from "@/components/TextInput";
import { getCitiesByRegion, getRegions } from "@/shared/utils/location";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z as zod } from "zod";

export const PersonalInfoSchema = zod.object({
  firstName: zod.string().min(1, { message: "Name is required!" }),
  lastName: zod.string().min(1, { message: "Name is required!" }),
  email: zod
    .string()
    .min(1, { message: "Email is required!" })
    .email({ message: "Email must be a valid email address!" }),
  phoneNumber: schemaHelper.phoneNumber(),
  additionalPhoneNumber: schemaHelper.phoneNumberOptional(),
  additionalInformation: zod.string().optional(),
  address: zod.string().min(1, { message: "Address is required!" }),
  region: zod.string().min(1, { message: "Region is required!" }),
  city: zod.string().min(1, { message: "City is required!" }),
});
export type PersonalInfoType = zod.infer<typeof PersonalInfoSchema>;

const PersonalInfoForm = () => {
  const defaultValues = {
    firstName: "ddd",
    lastName: "ddd",
    email: "aaa@gmail.com",
    phoneNumber: "677777777",
    additionalPhoneNumber: "",
    additionalInformation: "",
    address: "klhjh",
    region: "",
    city: "",
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PersonalInfoType>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues,
  });
  const regions = getRegions();
  const selectedRegion = watch("region");
  const selectedRegionId = selectedRegion ? Number(selectedRegion) : undefined;
  const cities = selectedRegionId ? getCitiesByRegion(selectedRegionId) : [];

  const onSubmit = (data: PersonalInfoType) => {
    console.log("✅ Saved Personal Info:", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="firstName"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              label="First Name"
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              label="Last Name"
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-cols-[auto_1fr] gap-2">
          <div className="relative w-16">
            <input
              className="peer p-3 w-full text-gray-800"
              value="+212"
              disabled
              id="prefix"
            />
            <label
              htmlFor="prefix"
              className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-600"
            >
              Prefix
            </label>
          </div>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                label="Phone"
                {...field}
                error={fieldState.error?.message}
              />
            )}
          />
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-2">
          <div className="relative w-16">
            <input
              className="peer p-3 w-full text-gray-800"
              value="+212"
              disabled
              id="aprefix"
            />
            <label
              htmlFor="aprefix"
              className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-600"
            >
              Prefix
            </label>
          </div>
          <Controller
            name="additionalPhoneNumber"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                label="Additional Phone"
                {...field}
                error={fieldState.error?.message}
              />
            )}
          />
        </div>
      </div>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            label="Email"
            {...field}
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="address"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            label="Address"
            {...field}
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="additionalInformation"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            label="Additional Information"
            {...field}
            error={fieldState.error?.message}
          />
        )}
      />
      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="region"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col">
              <Select
                onValueChange={(value) => field.onChange(value)}
                value={field.value ?? undefined}
              >
                <SelectTrigger className="w-full border-gray-300 focus:ring-2 focus:ring-primary-main">
                  <SelectValue placeholder="Select Region" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region.id} value={region.id.toString()}>
                      {region.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.region?.message}
                </span>
              )}
            </div>
          )}
        />

        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col">
              <Select
                onValueChange={(value) => field.onChange(value)}
                value={field.value ?? undefined}
              >
                <SelectTrigger className="w-full border-gray-300 focus:ring-2 focus:ring-primary-main">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city.id} value={city.id.toString()}>
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.city?.message}
                </span>
              )}
            </div>
          )}
        />
      </div>

      <CustomButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Save Information"}
      </CustomButton>
    </form>
  );
};

export default PersonalInfoForm;
