import { execSync } from "node:child_process";

export function runReport(reportName: string): string {
    return execSync(`build-report ${reportName}`).toString();
}