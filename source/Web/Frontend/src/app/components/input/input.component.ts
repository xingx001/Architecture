import { AppBaseComponent } from "../base/base.component";
import { Input } from "@angular/core";

export abstract class AppInputComponent extends AppBaseComponent<any> {
    @Input() autofocus = false;

    constructor(type: string) {
        super();
        this.type = type;
    }

    type!: string;

    input($event: any): void {
        this.value = $event.target.value;
    }
}
