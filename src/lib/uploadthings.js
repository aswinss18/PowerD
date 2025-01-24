import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

// Import your FileRouter configuration
import { ourFileRouter } from "~/app/api/uploadthing/core";

const UploadButton = generateUploadButton(ourFileRouter);
const UploadDropzone = generateUploadDropzone(ourFileRouter);

// Attach to the global object if needed
window.UploadButton = UploadButton;
window.UploadDropzone = UploadDropzone;
