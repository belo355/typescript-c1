import { View } from "./view.js";

export class MenssagemView extends View<string> {

  protected template(model: string): string {
    return `
      <p class="alert alert-success">${model}</p>
    `
  }
}