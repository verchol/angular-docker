import {TodoApp} from "./index_common";
import {bootstrapApp} from "angular2/platform/worker_app";

export function main() {
  bootstrapApp(TodoApp);
}
