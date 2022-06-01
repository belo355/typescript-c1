import { View } from "./view.js";
export class MenssagemView extends View {
    template(model) {
        return `
      <p class="alert alert-success">${model}</p>
    `;
    }
}
