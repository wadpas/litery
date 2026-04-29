"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type PutBlobResult } from "@vercel/blob";
import { upload } from "@vercel/blob/client";
import { useState, useRef } from "react";

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  return (
    <>
      <h1>Upload Your Avatar</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          const file = inputFileRef.current.files[0];

          const newBlob = await upload(file.name, file, {
            access: "private" /* or 'public' */,
            handleUploadUrl: "/api/upload",
          });

          setBlob(newBlob);
        }}
      >
        <Input
          name="file"
          ref={inputFileRef}
          type="file"
          required
          className="w-xl"
        />
        <Button type="submit">Upload</Button>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  );
}
