import { Input } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

export abstract class AppBaseComponent<Value> implements ControlValueAccessor {
    @Input() class!: string;
    @Input() disabled = false;
    @Input() formControlName!: string;
    @Input() text!: string;

    private _value!: Value;

    get value(): Value {
        return this._value;
    }

    set value(value: Value) {
        if (this.value === value) { return; }
        this._value = value;
        if (this.onChange) { this.onChange(value); }
    }

    private onChange!: (value: Value) => void;

    registerOnChange(onChange: any) {
        this.onChange = onChange;
    }

    // tslint:disable-next-line: no-empty
    registerOnTouched(_: () => void) { }

    writeValue(value: Value) {
        this.value = value;
    }
}
