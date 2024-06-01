import fs from "fs";

export function readFileAsString(filePath: string): string {
  const buffer = fs.readFileSync(filePath);
  return buffer.toString();
}
