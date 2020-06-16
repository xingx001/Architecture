import { FilterModel } from "./filter.model";

export class FiltersModel extends Array<FilterModel> {
    add(property: string, comparison: string, value: any) {
        this.removeIndex(this.findIndex(x => x.property === property && x.comparison === comparison));
        this.push(new FilterModel(property, comparison, value));
    }

    remove(property: string) {
        this.removeIndex(this.findIndex(x => x.property === property));
    }

    private removeIndex(index: number) {
        if (index < 0) { return; }
        this.splice(index, 1);
    }
}
