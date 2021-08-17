import { Model } from "@vuex-orm/core";

export default class Count extends Model {
  static entity = "count";

  static fields() {
    return {
      id: this.attr(null),
      count: this.attr(null),
    };
  }

  id!: number;
  count!: number;
}
