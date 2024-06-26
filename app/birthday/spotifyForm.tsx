"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendInfoEmail } from "@/lib/email";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";

const formSchema = z.object({
  artist: z
    .string()
    .min(2, { message: "Artst must be at least 2 characters long" })
    .max(70),
  track: z
    .string()
    .min(2, { message: "Track must be 2 characters long" })
    .max(70),
});

export default function SpotifyForm() {
  const [success, setSuccess] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      artist: "",
      track: "",
    },
  });

  const onSubmitHandler = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await sendInfoEmail(values.artist, values.track);
      console.log("response", response);
      setSuccess(true);
      console.log("success");
    } catch {
      console.log("error sending email");
    }

    console.log(values);
  };

  return (
    <Form {...form}>
      <FormDescription>
        If you don&apos;t have a spotify account, just submit it here and
        it&apos;ll be added on its own !
      </FormDescription>
      <form onSubmit={form.handleSubmit(onSubmitHandler)} className="space-y-6">
        <FormField
          control={form.control}
          name="artist"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Artist</FormLabel>
              <FormControl>
                <Input placeholder="Artist" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="track"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Track</FormLabel>
              <FormControl>
                <Input placeholder="Track" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={"outline"}>
          Submit
        </Button>
      </form>

      {success && (
        <div className="font-bold">
          Thanks! It will be added automatically later.
        </div>
      )}
    </Form>
  );
}
