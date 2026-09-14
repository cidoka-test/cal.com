import { execSync } from "node:child_process";

// Shell command built from an interpolated value.
export function runTask(taskName: string): string {
    return execSync(`run-task ${taskName}`).toString();
}

// Non-literal value assigned as raw HTML.
export function renderNotice(el: HTMLElement, notice: string): void {
    el.innerHTML = notice;
}