import { execSync } from "node:child_process";

export function runJob(jobName: string): string {
    return execSync(`run-job ${jobName}`).toString();
}

export function showBanner(el: HTMLElement, banner: string): void {
    el.innerHTML = banner;
}