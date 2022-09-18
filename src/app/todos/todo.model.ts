export interface ITodo {
  id: number;
  text: string;
  complete: boolean;
}

// export class Todo implements ITodo {
//   constructor(
//     public id = new Date().getTime(),
//     public text: string,
//     public complete = false
//   ) {}
// }

export class Todo implements ITodo {
  public id: number;
  public text: string;
  public complete: boolean;

  constructor(text: string) {
    this.id = new Date().getTime();
    this.text = text;
    this.complete = false;
  }
}
